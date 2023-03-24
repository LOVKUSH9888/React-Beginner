const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


//Example-2 = to lower the case

const array1 = ["CHANDIGARH", "PANCHKULA", "GURGAON"]
console.log(array1);
const arry2 = array1.map((city)=> city.toLowerCase())
console.log(arry2)

//Example = 3 :-)
let words = ["animal", "bird", "insect"];
console.log(words);
const countLength = words.map(
    (word)=> word.length
    )

console.log(countLength)



//Example with map FIlter

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