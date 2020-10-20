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
const  array = [1,2,3,1,4,10, 15, 16, 5, 12, 18, 19, 2, 20]<br/>
> a. Create a new array returning with multiples of 2, sorted in descending order and for every alternate multiple replace with a alphabet limited to 3 starting from “abc”, “def” [eg: [2,”ABC”,10, “DEF”.....]<br/>
> b. What are all the possible the ways to empty the above array<br/>
> c. The above array includes many repeating values, remove them using any ES6 method<br/>
> d. Iterate the above array without mutating to check if the value 3 exist <br/>

2. Analyse the below data representing the college students information <br/>
const students = [<br/>
{ name: "A", age: 17, college: "UVCE",stream:'CSE',currentYear:1 },<br/>
{ name: "B", age: 19, college: "KEAM",stream:'ECE',currentYear:2 },<br/>
{ name: "C", age: 23, college: "UVCE",stream:'EEE',currentYear:4 },<br/>
{ name: "D", age: 18, college: "UVCE",stream:'CSE',currentYear:3 },<br/>
{ name: "E", age: 22, college: "KEAM",stream:'AEI',currentYear:4 },<br/>
{ name: "F", age: 21, college: "NETE",stream:'EEE',currentYear:3 }<br/>
]
> a. There is election voting for the post of Chairperson, for which only final year students are eligible. Create a list satisfying the above condition.<br/>
> b. The student B seems to have the wrong college name in the above data. Return an above array with the college name replaced as “NETE”<br/>
> c. Find the total number of students that would be eligible for placements this year.<br/>
> d. Create an array with students with stream ‘EEE” and in the order of their currentYear<br/>
> e. Create a new array for the students above the age of 21, add a new property ‘cgpa’ <br/>

3. Analyse the below data <br/>
const arr1 = [<br/>
{key : "1" , value: "abc"}, <br/>
{key : "2" , value: "def"}, <br/>
{key : "3" , value: "ghi"}, <br/>
{key : "4" , value: "jkl"}<br/>
];
> a. Return an reserved array with only the value for key 3 altered with value : “xyz”, maintaining the remaining key value pairs<br/>
> b. Return an array containing only the values and append them to form a single word<br/>
> c. From the above the obtained single word, extract the exact middle letter<br/>

4.Combine the below two objects and create an array with only the object keys. <br/>
const obj1 = {a: 1 , b: 2} <br/>
const obj2 = {c:3, d:4 , e:5}<br/>

5.
let Obj ={<br/>
name:"ABC",<br/>
email:"abc@gmail.com",<br/>
age:25,<br/>
address:{<br/>
    city:"Tvpm",<br/>
    state:"Kerala",<br/>
    pinCode:12345<br/>
}<br/>
}<br/>
> a. From the above, console the address values(using destructuring)<br/>
> b. Write a function that prevent the above object from adding new properties but change its pinCode to 55555<br/>
