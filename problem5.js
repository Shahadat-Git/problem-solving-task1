/* 5. Task: Find And Modify
Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */

const people = [
  { name: "Alif", age: 25 },
  { name: "Moon", age: 30 },
  { name: "Rifat", age: 28 },
];

const modifyAgeByName = (people, name, newAge) => {
  const person = people.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return people;
};

const result = modifyAgeByName(people, "Moon", 50);
console.log(result);
