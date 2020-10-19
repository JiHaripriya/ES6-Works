// QUESTION SET - 1
console.log(`----------------------------------------------------------------------------
QUESTION SET - 1\n----------------------------------------------------------------------------\n`)

const qbTVMEmp = [
    {
        first_name: "Ben",
        last_name: "Almond",
        age: 28,
        position: "Senior Engineer", 
        company: "QB",
        location: "TVM",
        appraisal: 0,
    },
    {
        first_name: "Andrew",
        last_name: "Lords",
        age: 22,
        position: "Engineer",
        company: "QB",
        location: "TVM",
        appraisal: 3,
    },
    {
        first_name: "Arathi",
        last_name: "A",
        age: 42,
        position: "PM",
        company: "QB",
        location: "TVM",
        appraisal: 9,
    }
]
   
const qbKocEmp = [
    {
        first_name: "Subin",
        last_name: "Viswa",
        age: 28,
        position: "Engineer",
        company: "QB",
        location: "Kochi",
        appraisal: 1,
    },
    {
        first_name: "Dev",
        last_name: "Raj",
        age: 21,
        position: "Architect",
        company: "QB",
        location: "Kochi",
        appraisal: 2,
    },
    {
        first_name: "Thomas",
        last_name: "Mathew",
        age: 28,
        position: "Architect",
        company: "QB",
        location: "Kochi",
        appraisal: 5,
    },
    {
        first_name: "Deepa",
        last_name: "Thomas",
        age: 31,
        position: "Senior Engineer",
        company: "QB",
        location: "Kochi",
        appraisal: 4,
    },
    {
        first_name: "Antony",
        last_name: "Thomas",
        age: 31,
        position: "Senior Engineer",
        company: "QB",
        location: "Kochi",
        appraisal: 4,
    }
]
  
/*1*/
const qbEmployees = [...qbTVMEmp , ...qbKocEmp]
console.log("Q-1\n\n", qbEmployees)

/*2*/
const fullNames = qbEmployees.map(employee => `${employee.first_name} ${employee.last_name}`)
console.log(`Q-2\nList of Employees: ${fullNames}`)

/*3*/
console.log("Q-3\nEngineers above Age 25:\n\n", qbEmployees.filter(employee => employee.age > 25 && employee.position === "Engineer"))

/*4*/

/* GROUP BY POSITION INPUT ONLY */
const allPositions = new Set(qbEmployees.map(item => {return item.position})), 
objectCopy = qbEmployees.map(item => { return {...item} })

// Assign priority to sort parameters specified
const customSortBy = sortParameters => {
    let positionIndex = {}
    sortParameters.forEach((parameter, index) => Object.assign(positionIndex, {[parameter]: index}))
    // For the unsepcified positions, give same priority value
    for(let otherIndex of allPositions) {
        if (!sortParameters.includes(otherIndex)) Object.assign(positionIndex, {[otherIndex]: sortParameters.length})
    }
    return positionIndex
}
const positionPriority = customSortBy(['Architect', 'PM', 'Engineer'])
const sortedEmployees = objectCopy.sort((a, b) => positionPriority[a.position] - positionPriority[b.position])
console.log("Q-4 (GroupBy position listed)\n\n", sortedEmployees)

/* GROUP BY POSITION AND SORT ALPHABETICALLY */
const sortAndAssign = (groups) => {
    for (let group in groups) groups[group].sort((a, b) => (a.first_name > b.first_name) ? 1 : (a.first_name < b.first_name) ? -1 : 0)
    return groups
}

const groupByPosition = qbEmployees.reduce( (groups, item) => {
    groups[item.position] = Object.keys(groups).find(key => key == item.position) ? groups[item.position]: [];
    groups[item.position].push(item)
    return groups
}, {} );

console.log("Q-4 (Groupby position and alphabetically)\n", sortAndAssign(groupByPosition))

/*5*/
const appraisalValues = qbEmployees.map((value) => value.appraisal)
const checkAllEmployeeAppraisal = employees => employees.every(value => value >= 1)
console.log("Q-5\nStatement: Every employee received appraisal atleast once\n\
Statement is:", checkAllEmployeeAppraisal(appraisalValues))

/*6*/
const checkAnyEmployeeAppraisal = employees => employees.some(value => value >= 1)
console.log("Q-6\nStatement: Some employees received appraisal atleast once\n\
Statement is:", checkAnyEmployeeAppraisal(appraisalValues))

/*7*/
const employeeAppraisal0 = qbEmployees.map(employee => Object.assign({...employee}, {appraisal: 0}))
const setAppraisal = (employeeList, fname, lname, count) => {
    employeeList.forEach(employee => {
        if(employee.first_name == fname && employee.last_name == lname) Object.assign(employee, {appraisal: count})
    })
    return employeeList
}
console.log("Q-7\n\n", setAppraisal(employeeAppraisal0, "Thomas", "Mathew", 5))

/*8*/
const employeeListCopy = qbEmployees.map(item => Object.assign ({...item}, {appraisal: 3})),
appraisals = employeeListCopy.map(item => item.appraisal)
console.log("Q-8\nStatement: Every employee receive appraisal three times\n\
Statement is:", appraisals.every(value => value === 3))

/*9*/
console.log("Q-9\nTotal Appraisal count: ", appraisalValues.reduce((sum, value) => sum + value, 0))

/*10*/
const ageGroups = qbEmployees.reduce( (groups, item) => {
    groups[item.age] = Object.keys(groups).find(key => key == item.age) ? groups[item.age]: [];
    groups[item.age].push(item)
    return groups
}, {} );
const ageGroupsCount = groups => {for(let eachGroup in groups) console.log(`${eachGroup}\t${groups[eachGroup].length}`)}
console.log("Q-10\n\nAge\tCount")
ageGroupsCount(ageGroups)