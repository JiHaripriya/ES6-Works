const arrayQ1 = [1, 2, 3, 1, 4, 10, 15, 16, 5, 12, 18, 19, 2, 20]

/* 1. a. Create a new array returning with multiples of 2, sorted in descending order and for every alternate multiple replace with a alphabet
limited to 3 starting from “abc”, “def” [eg: [2,”ABC”,10, “DEF”.....] */

// Generate alphabet string
const alphabets = Array.from({length: (26)}, (_, index) => index + 65)
//Group alphabets by 'n' elements
const groupAlphabetsOf3 = (alphabets, ngroup) => {
    let start = 0, ngroups = []
    for (let end = ngroup; end <= alphabets.length + 1 ; end = end + ngroup) {
        ngroups.push(alphabets.slice(start, end).map(value => String.fromCharCode(value)).join(""))
        start = start + ngroup
    }
    return ngroups
}
const alphabetGroups = groupAlphabetsOf3(alphabets, 3).reverse()
// Extract multiples of 2
const evenNumbers = arrayQ1.filter(value => value % 2 == 0)

const a1 = evenNumbers.map((value, index) => {
    if (index % 2 == 0)  return value
    else return alphabetGroups.pop()
})
console.log(a1)

//1. b. What are all the possible the ways to empty the above array
let arrayQ1Copy1 = [...arrayQ1], arrayQ1Copy2 = [...arrayQ1], arrayQ1Copy3 = [...arrayQ1]

arrayQ1Copy1 = []

const method2 = (array) => {
    array.length = 0
    return array
}

const method3 = (array) => {
    while (array.length > 0) array.pop()
    return array
}

arrayQ1Copy2.splice(0, arrayQ1Copy2.length)

console.log("Method 1: ", arrayQ1Copy1)
console.log("Method 2: ", method2(arrayQ1Copy3))
console.log("Method 3: ", method3(arrayQ1Copy3))
console.log("Method 4: ", arrayQ1Copy2)

//1. c. The above array includes many repeating values, remove them using any ES6 method

// Method 1: Remove duplicates using Set method
let uniqueValueMethod1 = Array.from(new Set(arrayQ1)), uniqueValueMethod2 = [], uniqueValueMethod4 = []
console.log("Method 1: ", uniqueValueMethod1)

//Method 2: Using map and includes
arrayQ1.map(value => {
    if (!uniqueValueMethod2.includes(value)) uniqueValueMethod2.push(value)
    return uniqueValueMethod2
})
console.log("Method 2: ", uniqueValueMethod2)

// Method 3: Using filter parameters value and index
console.log("Method 3: ", arrayQ1.filter((value, index) => arrayQ1.indexOf(value) == index))

// Method 4: Reduce parameter accumulator
console.log("Method 4: ", arrayQ1.reduce((prev, value) => prev.includes(value) ? prev : [...prev, value], []))

//1. d. Iterate the above array without mutating to check if the value 3 exist 

// Method 1
console.log("Method 1: ", arrayQ1.includes(3) == true ? "Value 3 Exists" : "Value 3 doesnot exist")

// Method 2
console.log("Method 2: ", arrayQ1.filter(value => value == 3).length >= 1 ? "Value 3 Exists" : "Value 3 doesnot exist")

/* ========================================================================================================================================== */

const students = [
    { name: "A", age: 17, college: "UVCE",stream:'CSE',currentYear:1 },
    { name: "B", age: 19, college: "KEAM",stream:'ECE',currentYear:2 },
    { name: "C", age: 23, college: "UVCE",stream:'EEE',currentYear:4 },
    { name: "D", age: 18, college: "UVCE",stream:'CSE',currentYear:3 },
    { name: "E", age: 22, college: "KEAM",stream:'AEI',currentYear:4 },
    { name: "F", age: 21, college: "NETE",stream:'EEE',currentYear:3 }
]

// 2. a. There is election voting for the post of Chairperson, for which only final year students are eligible. Create a list satisfying the above condition.
console.log(students.filter(student => student.currentYear == 4).map(value => value.name))

//2. b. The student B seems to have the wrong college name in the above data. Return an above array with the college name replaced as “NETE”
students.map(student => {if (student.name == 'B') student.college = 'NETE'})
console.log(students)

//2. c. Find the total number of students that would be eligible for placements this year.
console.log("Count of placement eligible student: ", students.filter(student => student.currentYear == 4).length)

//2. d. Create an array with students with stream ‘EEE” and in the order of their currentYear
console.log(students.filter(student => student.stream == 'EEE').sort((a, b) => a.currentYear - b.currentYear))

//2. e. Create a new array for the students above the age of 21, add a new property ‘cgpa’ 
console.log(students.filter(student => student.age >= 21).map(value => Object.assign(value, {cgpa: []})))

/* ========================================================================================================================================== */

const arr1 = [
    {key : "1" , value: "abc"}, 
    {key : "2" , value: "def"}, 
    {key : "3" , value: "ghi"}, 
    {key : "4" , value: "jkl"}
    ];

//3. a. Return an reserved array with only the value for key 3 altered with value : “xyz”, maintaining the remaining key value pairs
const result = arr1.map(arrValue => {
    if(arrValue.key == 3) return arrValue.value = 'xyz'
    else return arrValue
})
console.log(result)

//3. b. Return an array containing only the values and append them to form a single word
console.log(arr1.map(item => item.value).join(""))

// 3. c. From the above the obtained single word, extract the exact middle letter
const extractMiddleLetter = (string) => {
    if(string.length % 2 == 0)  console.log(string.slice(string.length/2 - 1, string.length/2 + 1))
    else console.log(string.slice(string.length/2, string.length/2 + 1))
}
extractMiddleLetter(arr1.map(item => item.value).join(""))

const obj1 = {a: 1 , b: 2} 
const obj2 = {c:3, d:4 , e:5}

/* ========================================================================================================================================== */

//4. Combine the below two objects and create an array with only the object keys
const combinedObjects = {...obj1, ...obj2}
console.log(Object.keys(combinedObjects))

/* ========================================================================================================================================== */

let Obj ={
    name:"ABC",
    email:"abc@gmail.com",
    age:25,
    address:{
        city:"Tvpm",
        state:"Kerala",
        pinCode:12345
    }
}

//5.a. From the above, console the address values(using destructuring)
const {address} = Obj
console.log(address)

//5.b. Write a function that prevent the above object from adding new properties but change its pinCode to 55555
// To avoid adding new property --> seal or preventExtension can be used
Object.seal(Obj).address.pinCode = 55555
console.log(Obj)