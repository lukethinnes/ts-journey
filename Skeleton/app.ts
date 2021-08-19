//const person: {
  //name: string;
  //age: number;
//}
const person = {
  name: 'Luke',
  age: 27,
  hobbies: ['Cooking', 'Hiking']
}

let favoriteActivities: string[]
favoriteActivities = ['Cooking']
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
