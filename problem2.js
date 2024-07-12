/* 2. Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. */

const books = [
  { title: "Gora", author: "Rabindranath Tagore", year: 2001 },
  { title: "দূরবীন", author: "Shirshendu Mukhopadhyay", year: 2002 },
  { title: "Devdas", author: "Sarat Chandra Chattopadhyay", year: 2003 },
];

const getBookTitles = (books) => {
  return books.map((book) => book.title);
};

const result = getBookTitles(books);
console.log(result);
