let sampleData = {
    name: "World Cup 2018",
    matches: [
        {
	Id: 1,
            match: 'group-stage-1',
            team1: {
                name: "Russia",
               code: "RUS"
            },
            team2: {
                name: "Saudi Arabia",
               code: "KSA"
            },
            knockout: false,
            stadium: {
               key: "luzhniki",
                name: "Luzhniki Stadium"
            }
        },
        {
	Id: 2,
            match: 'group-stage-2',
            team1: {
                name: "Egypt",
               code: "EGY"
            },
            team2: {
                name: "Uruguay",
               code: "URU"
            },
            knockout: false,
            stadium: {
               key: "ekaterinburg",
                name: "Ekaterinburg Arena"
            },
        },
        {
	Id: 3,
            match: 'group-stage-3',
            team1: {
                name: "Portugal",
               code: "POR"
            },
            team2: {
                name: "Spain",
               code: "ESP"
            },
            knockout: false,
            stadium: {
               key: "fisht",
                name: "Fisht Stadium"
            },
        },
        {   
	        Id: 5,
            match: 'semi-final-2',
            team1: {
                name: "Croatia",
               code: "CRO"
            },
            team2: {
                name: "England",
               code: "ENG"
            },
            knockout: true,
            stadium: {
               key: "luzhniki",
                name: "Luzhniki Stadium"
            },
        },
        {
	Id: 6,
            match: 'final',
            team1: {
                name: "France",
               code: "FRA"
            },
            team2: {
                name: "Croatia",
               code: "CRO"
            },
            knockout: true,
            stadium: {
               key: "luzhniki",
                name: "Luzhniki Stadium"
            },
        }
    ]
}

/********************
* Array Operations *
*********************/

//The match details for semi final -1 appears to be missing from the data. Add new match detail into the matches array without mutating 
//the original Array ( set Id number as 4)

const semiFinal1 =  {
	Id: 4,
    match: 'semi-final-1',
    team1: {
        name: "Croatia",
        code: "CRO"
    },
    team2: {
        name: "Spain",
        code: "ESP"
    },
    knockout: true,
    stadium: {
        key: "fisht",
        name: "Fisht Stadium"
    }
}

let dataCopy = [...sampleData.matches, semiFinal1]
console.log(sampleData)

//Create a new variable and sort the matches array based on the Id property. 
const sortedMatches = dataCopy.sort((a, b) => a.Id - b.Id)
console.log(sortedMatches)

//Check whether the matches array contains only knockout matches and save the result to a new variable.
const knockoutMatchesStatus = sortedMatches.map(value => value.knockout).every(value => value == true)
console.log(knockoutMatchesStatus)

//Create a new variable from the sample data which contains only the details of knockout matches. 
const knockoutMatches = sampleData.matches.filter(value => value.knockout == true)
console.log(knockoutMatches)

//Create a new variable finalData and return only the details of the Final Match.
let finalData = sampleData.matches.filter(value => value.match == 'final')
console.log(finalData)

//Create a new Variable and return only the stadium names as a list. 
const stadiumList = Array.from(new Set (sampleData.matches.map(value => value.stadium.name)))
console.log(stadiumList)

/********************
* Object Operations *
*********************/

// From the already created finalData variable, use ES6 object destructuring to create variables that return details of team1 and team2.
const [{team1, team2}] = finalData
console.log(team1, team2)

//  Update the finalData variable and update the stadium property to { key: “Moscow”, name: “Moscow Stadium” }.
const updatedFinalData = finalData.map(value => Object.assign({...value}, {stadium: {key: "Moscow", name: "Moscow Stadium"}}))
console.log(updatedFinalData)

/* ========================================================================================================================================== */

const employees = [
    {
       "name":"A1",
       "age":30,
       "technology":"REACT",
       "place":"CALICUT",
       "experience":5
    },
    {
       "name":"A2",
       "age":35,
       "technology":"ANGULAR",
       "place":"TVM",
       "experience":8
    },
    {
       "name":"A3",
       "age":25,
       "technology":"CSS",
       "place":"KORATTY",
       "experience":4
    },
    {
       "name":"A4",
       "age":45,
       "technology":"VUE",
       "place":"KOCHI",
       "experience":10
    },
    {
       "name":"A5",
       "age":25,
       "technology":"REACT NATIVE",
       "place":"CALICUT",
       "experience":4
    },
    {
       "name":"A6",
       "age":35,
       "technology":"CSS",
       "place":"CALICUT",
       "experience":8
    },
    {
       "name":"A7",
       "age":37,
       "technology":"REACT",
       "place":"CALICUT",
       "experience":4
    }
]

// Create an array with employees who have above 30 years old and experience above 5 years.
const employeesAbove30Exp5 = employees.filter(employee => (employee.age > 30 && employee.experience > 5))
console.log(employeesAbove30Exp5)

// Create an array with employees other than CSS technology.
const noCSSEmployee = employees.filter(employee => employee.technology != 'CSS')
console.log(noCSSEmployee)

// Employees from CALICUT who have above 5 years of experience are eligible for bonuses. Create a list satisfying the above condition.
const calicutEligibleEmployees = employees.filter(employee => (employee.place == 'CALICUT' && employee.experience > 5))
console.log(calicutEligibleEmployees)

// Find the total age of employees working in REACT technology.
const totalAge = employees.filter(employee => employee.technology == 'REACT').map(employee => employee.age).reduce((a, b) => a + b, 0)
console.log(totalAge)

// Employee A1 got a transfer from CALICUT to TVM. Update the existing array with the new place of A1.
employees.filter(employee => employee.name == 'A1').map(details => details.place = 'TVM')
console.log(employees)