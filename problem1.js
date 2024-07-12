/* 1. Task: Array Filtering And Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

const people = [
  { name: "moon", age: 25, gender: "female" },
  { name: "rifat", age: 30, gender: "male" },
  { name: "alif", age: 28, gender: "male" },
  { name: "dalia", age: 22, gender: "female" },
];

const filterAndMapNames = (people) => {
  return people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
};

const result = filterAndMapNames(people);
console.log(result);
