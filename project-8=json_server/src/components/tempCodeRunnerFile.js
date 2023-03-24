let people = [
    {name: "John", age: 22},
    {name: "Love", age: 24},
    {name: "Singh", age: 19},
    {name: "Vishal", age: 17}
]

let filteredList = people.filter((people) => people.age<=25);
//This can be also written in the bracket also
/*let filteredList = people.filter((people) => people.age>18);*/

console.log(filteredList);