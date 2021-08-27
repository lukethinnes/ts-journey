//const person: {
  //name: string;
  //age: number;
//}
//const person: {
  //name: string
  //age: number
  //hobbies: string[]
  //role: [number, string]
//} = {
  //name: 'Luke',
  //age: 27,
  //hobbies: ['Cooking', 'Hiking'],
  ////tuples always have only 2 elements!
  //role: [5, 'Writer']
//}

enum Role { ADMIN, READ_ONLY, AUTHOR };


const person = {
  name: 'Luke',
  age: 27,
  hobbies: ['Cooking', 'Hiking'],
  role: Role.ADMIN
}


//person.role.push('admin')

let favoriteActivities: string[]
favoriteActivities = ['Cooking']
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
if (person.role === Role.AUTHOR) {
  console.log('is read only')
}
