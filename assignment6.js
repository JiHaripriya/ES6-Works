// Remove duplicates of the array and return an array of only unique elements
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const uniqueElements = Array.from(new Set(array))
console.log(uniqueElements)

// Find the intersection of two arrays. (An intersection would be the common elements that exist within both arrays). The elements should be unique!
const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];
let uniqueIntersection = []
firstArray.forEach(element => {
    if((secondArray.includes(element)) && !uniqueIntersection.includes(element)) uniqueIntersection.push(element)
})
console.log(uniqueIntersection.sort())

// Remove empty values from the array.
const array1 = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,]
console.log(array1.filter(item => item || item === 0))

//Write a JavaScript program to display whether the player is retired  (i.e. display player name, nationality and playing status) of the following players.
const cricket = [
    {
        name: 'Sachin Tendulkar',
        nationality: 'India',
        retired: true
    }, 
    {
        name: 'Shane Warne',
        nationality: 'Australia',
        retired: true
    }, 
    {
        name: 'Virat Kohli',
        nationality: 'India',
        retired: false
    }
];

for(let player of cricket){
    if(player.retired == true) console.log(`Name: ${player.name}\nNationality: ${player.nationality}\nPlaying Status: Retired\n`)    
}
  
/*
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
    Test Data :
    ----------
        console.log(first([7, 9, 0, -2]));
        console.log(first([],3));
        console.log(first([7, 9, 0, -2],3));
        console.log(first([7, 9, 0, -2],6));
        console.log(first([7, 9, 0, -2],-3));

    Expected Output :
    -----------------
        7 --> count is NaN
        [] --> input array empty
        [7, 9, 0]
        [7, 9, 0, -2]
        [] --> count negative
*/
const first = (array, count) => {
    if (count == undefined) count = 1
    else if (count < 0 || array.length == 0) return []
    return array.slice(0, count)
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));  

//Write a function to find whether an element is present in an array or not
Array.prototype.isElementPresent =  function(element) {
    return this.includes(element)
}
const array2 = [7, 9, 0, -2]
console.log(array2.isElementPresent(7))

//Remove last element of an array (not using slice)
array2.pop()
console.log(array2)

//Check If at Least one Array Element is greater than 5
console.log(array.some(value => value == 5) == true ? "Atleast one array element is greater than 5" : "There are no 5 in the array")

// Copy the object obj1 and create a new object obj2 and add a new property completed : false, without changing the original object
const obj1 = {
    'testable': true,
    'removable': false,
    'printable': false,
    'changeable': true
}

const obj2 = {...obj1, completed: false}
console.log(obj2)

//Write a function to remove nth element of an array
Array.prototype.removeNthElement = function (position) {
    this.splice(position, 1)
    return this
}
console.log(array.removeNthElement(2))

//Remove first 2 elements from an array using spread operator
let array3 = [1, 2, 3, 4]
let [, , ...remain] = array3
console.log(remain)

// Replace first and second element with 5 and 6 using splice
const array4 = [1,2,3,4,5]
array3.splice(0, 2, 5, 6)
console.log(array4)