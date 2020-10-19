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
    }
]
  
/*1*/
const qbEmployees = [...qbTVMEmp , ...qbKocEmp]
console.log("Q-1\n\n", qbEmployees)

/*2*/
const firstLastNames = [], names = [];

// Get first and last names
qbEmployees.forEach(employee => {
    const {first_name: firstName, last_name: lastName} = employee
    firstLastNames.push([firstName, lastName])
})
// Join first and last names
const joinFirstLastNames = (nameList) => {
    for (let eachName of nameList) names.push(eachName.join(' '))
    return names
}
console.log(`Q-2\nList of Employees: ${joinFirstLastNames(firstLastNames)}`)

/*3*/
const positionAgeFilter = employee => employee.age > 25 && employee.position === "Engineer"
console.log("Q-3\nEngineers above Age 25:\n\n", qbEmployees.filter(positionAgeFilter))

/*4*/
const allPositions = new Set(qbEmployees.map(item => {return item.position})), 
objectCopy = qbEmployees.map(item => { return {...item} })

// Assign priority to sort parameters specified
const customSortBy = sortParameters => {
    let positionIndex = {}
    sortParameters.forEach((parameter, index) => {
        Object.assign(positionIndex, {[parameter]: index})
    })
    // For the unsepcified positions, give same priority value
    for(let otherIndex of allPositions) {
        if (!sortParameters.includes(otherIndex)) Object.assign(positionIndex, {[otherIndex]: sortParameters.length})
    }
    return positionIndex
}
const positionPriority = customSortBy(['Architect', 'PM', 'Engineer'])
const sortedEmployees = objectCopy.sort((a, b) => positionPriority[a.position] - positionPriority[b.position])
console.log("Q-4\n\n", sortedEmployees)

/*5*/
const appraisalValues = qbEmployees.map((value) => value.appraisal)
const checkAllEmployeeAppraisalOnce = employees => employees.every(value => value >= 1)
console.log("Q-5\nStatement: Every employee received appraisal atleast once\n\
Statement is:", checkAllEmployeeAppraisalOnce(appraisalValues))

/*6*/
const checkAnyEmployeeAppraisalOnce = employees => employees.some(value => value >= 1)
console.log("Q-6\nStatement: Some employees received appraisal atleast once\n\
Statement is:", checkAnyEmployeeAppraisalOnce(appraisalValues))

/*7*/
const employeeAppraisal0 = qbEmployees.map(employee => Object.assign(employee, {appraisal: 0}))
const setAppraisal = (employeeList, fname, lname, count) => {
    employeeList.forEach(employee => {
        if(employee.first_name == fname && employee.last_name == lname) Object.assign(employee, {appraisal: count})
    })
    return employeeList
}
console.log("Q-7\n\n", setAppraisal(employeeAppraisal0, "Thomas", "Mathew", 5))

/*8*/
const employeeListCopy = JSON.parse(JSON.stringify(qbEmployees)), appraisals = []
for(let employee of employeeListCopy) Object.assign (employee, {appraisal: 3})
for (let employee of employeeListCopy) appraisals.push(employee.appraisal)
console.log("Q-8\nStatement: Every employee receive appraisal three times\n\
Statement is:", appraisals.every(value => value === 3))

/*9*/
const addedResult = appraisalValues.reduce((sum, value) => {
    return sum + value
}, 0)
console.log("Q-9\nTotal Appraisal count: ", addedResult)

/*10*/
const ageGroups = qbEmployees.reduce( (groups, item) => {
    groups[item.age] = Object.keys(groups).find(key => key == item.age) ? groups[item.age]: [];
    groups[item.age].push(item)
    return groups
}, {} );

const ageGroupsCount = groups => {
    for(let eachGroup in groups) console.log(`${eachGroup}\t${groups[eachGroup].length}`)
}
console.log("Q-10\n\nAge\tCount")
ageGroupsCount(ageGroups)


// QUESTION SET - 2
console.log(`----------------------------------------------------------------------------
QUESTION SET - 2\n----------------------------------------------------------------------------\n`)

const apparel = [
	{
		Name: "Jeans",
		Category: "clothes",
		Brand: "Levi",
		Actual_price: 2209,
		Discount: 10
    },
    {
		Name: "Silk Saree",
		Category: "clothes",
		Brand: "Soch",
		Actual_price: 6560,
		Discount: 33
    }, 
    {
		Name: "T-shirts",
		Category: "clothes",
		Brand: "Westworld",
		Actual_price: 850,
		Discount: 0
	},  
	{
		Name: "Dhothi",
		Category: "clothes",
		Brand: "MCR",
		Actual_price: 1570,
		Discount: 2
	}, 
    {
		Name: "Crocs",
		Category: "shoes",
		Brand: "Killer",
		Actual_price: 2797,
		Discount: 30
    }, 
    {
		Name: "90s Runner",
		Category: "shoes",
		Brand: "Puma",
		Actual_price: 4999,
		Discount: 50
    },
    {
		Name: "Men\'s Boots",
		Category: "shoes",
		Brand: "Puma",
		Actual_price: 3999,
		Discount: 50
    },
    {
		Name: "Diamond Ring",
		Category: "jewellery",
		Brand: "Bluestone",
		Actual_price: 14800,
		Discount: 0
    },
    {
		Name: "Gold earring",
		Category: "jewellery",
		Brand: "Tanishq",
		Actual_price: 21529,
		Discount: 6
    },
    {
		Name: "Choker",
		Category: "accessories",
		Brand: "Womanista",
		Actual_price: 129,
		Discount: 0
    },
    {
		Name: "Watch",
		Category: "accessories",
		Brand: "Sonic",
		Actual_price: 2534,
		Discount: 2
	}
]

/*1*/ 
const itemList = apparel.map((value) => value.Name)
console.log("Q-1\n", itemList)

/*2*/
const {Name:ItemName, Actual_price:Price, ...RestPropertyValue} = apparel[1]
console.log("Q-2\n\n Extracted Name: ",ItemName, "\n Extracted Actual_price: ", Price, 
"\n Remaining properties:", RestPropertyValue)

/*3*/
const apparelCopy = JSON.parse(JSON.stringify(apparel))
for(let eachItem of apparelCopy) {
    Object.assign (eachItem, {Selling_price: (eachItem.Actual_price * (1 - eachItem.Discount / 100)).toFixed(2)})
}
console.log("Q-3\n", apparelCopy)

/*4*/
const sameBrandElements = apparel.filter(element => element.Brand === "Puma")
console.log("Q-4\n\n", sameBrandElements)

/*5*/
const productByCategory = apparel.reduce( (groups, item) => {
    groups[item.Category] = Object.keys(groups).find(key => key == item.Category) ? groups[item.Category]: [];
    groups[item.Category].push(item)
    return groups
}, {} );
console.log("Q-5\n\n", productByCategory)

/*6*/
const apparelItems = JSON.parse(JSON.stringify(apparel))

const sellingPriceCalculation = (item, discount) => {
    return {Selling_price: (item.Actual_price * (1 - discount / 100)).toFixed(2)}
}

// Sets all products discount value to 5%
const setDefaultDiscount5 = (item) => { 
    Object.assign(item, {Discount: 5}, sellingPriceCalculation(item, 5))
    return item
}

const setBrandDiscount = (items, brand, discount) => {
    for (let item of items) {
        if (item.Brand === brand) Object.assign (item, sellingPriceCalculation(item, discount))
        else setDefaultDiscount5(item) 
        // Adds additonal 2% discount
        if (item.Selling_price > 4000) Object.assign (item, {Selling_price: (item.Selling_price * (1 - 2 / 100)).toFixed(2)}) 
    }
    return items
}
console.log("Q-6\n", setBrandDiscount(apparelItems, "Puma", 50))