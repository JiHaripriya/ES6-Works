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
7. Find the team which is in both group 1 & 2 and convert that particular object to array as shown in the example below.
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
12. Remove keys “awayJerseyColour” and “captain” and print them as well as the remaining details as an object without mutating.
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

