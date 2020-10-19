const teams = [
    {
      name: "Chelsea",
      id: 1,
      groupId: [1, 2],
      points: 10,
    },
    {
      name: "Liverpool",
      id: 2,
      groupId: [2, 3],
      points: 20,
    },
    {
      name: "Manchester United",
      id: 3,
      groupId: [3, 4],
      points: 50,
    },
    {
      name: "Arsenal",
      id: 4,
      groupId: [1, 4],
      points: 20,
    },
]
 
//1. Remove the first element of the Teams array using spread operator.
const [, ...rest ] = teams
console.log(rest)

//2. Remove the last element of the Teams array (hint use array slice).
console.log(teams.slice(0, -1))

//3. Find total points of all teams.
console.log(teams.map(team => team.points).reduce((a, b) => a + b))

//4. Create an object with group ids as key and an array of team names in it as values.
let groupIds = [], teamsInGroup = {}
teams.map(team => {
    // get distinct group ids for keys
    team.groupId.forEach( eachId => {
        // no key exists
        if(!groupIds.includes(eachId)) {
            groupIds.push(eachId)
            Object.assign(teamsInGroup, {[eachId]:[]})
        }
        teamsInGroup[eachId].push(team.name)
    })
})
console.log(teamsInGroup)

//5. Filter teams having points higher than or equal to 20 and is in group 1.
console.log(teams.filter( team => team.groupId.includes(1) && team.points >= 20))

//6. Find the name of the team whose id is 4.
console.log(teams.map(team => team.id == 4 ? team.name : false).filter(result => typeof result != 'boolean'))
// (or)
console.log(teams.filter(team => { if(team.id == 4) return team.name }))

// 7. Find the team which is in both group 1 & 2 and convert that particular object to array as shown in the example below:
const teamIn_1_2 = teams.map( team => (team.groupId.includes(1) && team.groupId.includes(2)) ? Object.entries(team) : team)
console.log(teamIn_1_2)

//8. Check if any team is in group 3 and in group 4
console.log(teams.filter( team => team.groupId.includes(3) && team.groupId.includes(4)))

//9. Reduce 5 points for teams in group 3 into a new array
const group3 = teams.map(team => {
    team = {...team}
    if (team.groupId.includes(3)) team.points = team.points - 5
    return team
})
console.log(group3)

//10. Print the names of all teams separated by a coma
console.log(teams.map(team => team.name).join(', '))

//11. Check if all teams have points greater than 10
console.log(teams.map(team => team.points).every(value => value > 10))

// 12. Remove keys “awayJerseyColour” and “captain” and print them as well as the remaining details as an object without mutating: 

const manU = 
{
    name: "Manchester United",
    id: 1,
    group: ["Champions League", "League Cup"],
    points: 10,
    jerseyColour: "red",
    homeGround: "Old Trafford",
    awayJerseyColour: "black",
    captain: "Harry",
    coach: "OGS",
}
const {awayJerseyColour, captain, ...remain} = manU
console.log(`Jersey Color: ${awayJerseyColour}, \nCaptain: ${captain}, \nRemaining Details:\n${JSON.stringify(remain)}`)