# ES6-Works
All ES6 related assignments

## Assignment - 1

1. Create a new array named employees by merging ‘qbTVMEmp’ and ‘qbKocEmp’ using a spread operator.
2. Iterate through the whole employees list and log the employees full name by creating a function.(Use spread operator, rest parameters, Object destructuring, array.join)
3. List all employees having role 'Engineer' and age above '25'
4. Create a filter function for sort employees by position, by default the filter need to sort employee having role 'Architect'
5. Create a function for checking whether all the employees got appraisal once.
6. Create a function for checking whether any of the employees got an appraisal.
7. Create a function for setting employee appraisal count. By default it should be zero.
8. Without modifying the existing employee list, set the appraisal count of all employees to 3 and check whether all employees got appraisal 3 times.
9. Calculate the total count of appraisal provided for all employees.
10. Create a function for listing employees' age as an array list the number of people in each group (age distribution).


## Assignment - 2

1. Create a list of all items available in the store
2. Consider the second item in the list. Extract its name and actual_price and move the remaining properties to another variable
3. Iterate through each item in list to compute the selling price according to formula (selling price = actual_price*(1-discount/100)). Append that value to item and create the new list consisting of the modified items
4. Find all elements in list who has a particular brand name
5. Convert the given list into a collection where items are grouped according to their category
6. ABC is planning to conduct a promotional event where-in special discounts are given for some brands. Create a function to calculate the new selling price for all of the items in the store.The function accepts the brand and discount% as parameters.Default the discount percentage to 5%. Also, an additional 2% discount is provided if the final price of the commodity is above 4000, irrespective of the brand.


## Assignment - 3

1. Remove the first element of the Teams array using spread operator.
2. Remove the last element of the Teams array (hint use array slice).
3. Find total points of all teams.
4. Create an object with group ids as key and an array of team names in it as values.
5. Filter teams having points higher than or equal to 20 and is in group 1.
6. Find the name of the team whose id is 4.
7. Find the team which is in both group 1 & 2 and convert that particular object to array as shown in the example below:
    {
        name: 'team name',
        id: 0,
        points: 90,
        group: [3,4,2]
    } to
    [
        ['name','team name'],
        ['id', 0],
        ['points', 90],
        ['group', [3, 4, 2] ]
    ]
8. Check if any team is in group 3 and in group 4
9. Reduce 5 points for teams in group 3 into a new array
10. Print the names of all teams separated by a coma
11. Check if all teams have points greater than 10
12. Remove keys “awayJerseyColour” and “captain” and print them as well as the remaining details as an object without mutating: 
    const manU = 
    {
        name: "Manchester United",
        id: 1,
        group: [“Champions League”, "League Cup"],
        points: 10,
        jerseyColour: "red",
        homeGround: "Old Trafford",
        awayJerseyColour: "black",
        captain: "Harry",
        coach: "OGS",
    }

## Assignment - 4

1. Consider the below array<br/>
const  array = [1, 2, 3, 1, 4, 10, 15, 16, 5, 12, 18, 19, 2, 20]<br/>
    a. Create a new array returning with multiples of 2, sorted in descending order and for every alternate multiple replace with a alphabet limited to 3 starting from “abc”, “def” [eg: [2,”ABC”,10, “DEF”.....]<br/>
    b. What are all the possible the ways to empty the above array<br/>
    c. The above array includes many repeating values, remove them using any ES6 method<br/>
    d. Iterate the above array without mutating to check if the value 3 exist <br/>

2. Analyse the below data representing the college students information <br/>
const students = [<br/>
{ name: "A", age: 17, college: "UVCE",stream:'CSE',currentYear:1 },<br/>
{ name: "B", age: 19, college: "KEAM",stream:'ECE',currentYear:2 },<br/>
{ name: "C", age: 23, college: "UVCE",stream:'EEE',currentYear:4 },<br/>
{ name: "D", age: 18, college: "UVCE",stream:'CSE',currentYear:3 },<br/>
{ name: "E", age: 22, college: "KEAM",stream:'AEI',currentYear:4 },<br/>
{ name: "F", age: 21, college: "NETE",stream:'EEE',currentYear:3 }<br/>
]<br/>
    a. There is election voting for the post of Chairperson, for which only final year students are eligible. Create a list satisfying the above condition.<br/>
    b. The student B seems to have the wrong college name in the above data. Return an above array with the college name replaced as “NETE”<br/>
    c. Find the total number of students that would be eligible for placements this year.<br/>
    d. Create an array with students with stream ‘EEE” and in the order of their currentYear<br/>
    e. Create a new array for the students above the age of 21, add a new property ‘cgpa’ <br/>

3. Analyse the below data <br/>
const arr1 = [<br/>
{key : "1" , value: "abc"}, <br/>
{key : "2" , value: "def"}, <br/>
{key : "3" , value: "ghi"}, <br/>
{key : "4" , value: "jkl"}<br/>
];<br/>
    a. Return a reserved array with only the value for key 3 altered with value : “xyz”, maintaining the remaining key value pairs<br/>
    b. Return an array containing only the values and append them to form a single word<br/>
    c. From the above the obtained single word, extract the exact middle letter<br/>

4. Combine the below two objects and create an array with only the object keys. <br/>
    const obj1 = {a: 1 , b: 2} <br/>
    const obj2 = {c:3, d:4 , e:5}<br/>

5. let Obj ={<br/>
    name:"ABC",<br/>
    email:"abc@gmail.com",<br/>
    age:25,<br/>
    address:{
        city:"Tvpm",
        state:"Kerala",
        pinCode:12345
    }<br/>
    }<br/>
    a. From the above, console the address values (using destructuring)<br/>
    b. Write a function that prevent the above object from adding new properties but change its pinCode to 55555<br/>

## Assignment - 5

I. Data for some of the matches played in 2018 FIFA World Cup 2018 is gievn. Find solution for the following queries using ES6 Methods:

#### Array Operations

1. The match details for semi final -1 appears to be missing from the data. Add new match detail into the matches array without mutating the original Array ( set Id number as 4).
2. Create a new variable and sort the matches array based on the Id property. 
3. Check whether the matches array contains only knockout matches and save the result to a new variable.
4. Create a new variable from the sample data which contains only the details of knockout matches. 
5. Create a new variable finalData and return only the details of the Final Match.
6. Create a new Variable and return only the stadium names as a list. 

#### Object Operations
1. From the already created finalData variable, use ES6 object destructuring to create variables that return details of team1 and team2.
2. Update the finalData variable and update the stadium property to { key: “Moscow”, name: “Moscow Stadium” }. 

II. Data for sample employee list of the company is gievn. Find solution for the following queries using ES6 Methods:

1. Create an array with employees who have above 30 years old and experience above 5 years.
2. Create an array with employees other than CSS technology.
3. Employees from CALICUT who have above 5 years of experience are eligible for bonuses. Create a list satisfying the above condition.
4. Find the total age of employees working in REACT technology.
5. Employee A1 got a transfer from CALICUT to TVM. Update the existing array with the new place of A1.

## Assignment - 6

1. Remove duplicates of the array and return an array of only unique elements <br>
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
2. Find the intersection of two arrays.  (An intersection would be the common elements that exist within both arrays). The elements should be unique!<br>
const firstArray = [2, 2, 4, 1];<br>
const secondArray = [1, 2, 0, 2];
3. Remove empty values from the array.<br>
const array = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,]
4. Write a JavaScript program to display whether the player is retired  (i.e. display player name, nationality and playing status) of the following players.<br>
const cricket = [{<br>
name: 'Sachin Tendulkar',<br>
nationality: 'India',<br>
retired: true<br>
}, {<br>
name: 'Shane Warne',<br>
nationality: 'Australia',<br>
retired: true<br>
}, {<br>
name: 'Virat Kohli',<br>
nationality: 'India',<br>
retired: false<br>
}];
5. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array<br>
Test Data :<br>
console.log(first([7, 9, 0, -2]));<br>
console.log(first([],3));<br>
console.log(first([7, 9, 0, -2],3));<br>
console.log(first([7, 9, 0, -2],6));<br>
console.log(first([7, 9, 0, -2],-3));<br>
Expected Output :<br>
7<br>
[]<br>
[7, 9, 0]<br>
[7, 9, 0, -2]<br>
[]<br>
6. Write a function to find whether an element is present in an array or not
7. Remove last element of an array (not using slice)<br>
Const array = [1, 2, 3]
8. Check If at Least one Array Element is greater than 5
9. Copy the object obj1 and create a new object obj2 and add a new property completed : false, without changing the original object<br>
const obj1 = {<br>
'testable': true,<br>
'removable': false,<br>
'printable': false,<br>
'changeable': true<br>
}
10. Write a function to remove nth element of an array
11. Remove first 2 elements from an array using spread operator<br>
	Const array = [10, 20, 30, 40, 50, 60, 70]
12. Replace first and second element with 5 and 6 using splice<br>
const array = [1,2,3,4,5]