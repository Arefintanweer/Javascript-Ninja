//Template string also called Template Literal.
//Good usecase of template string is to create html templates.

//Template Strings
const title = 'Eloquent Javascript';
const author ='Mario';
const likes = 30;

//Concatanation way
let result = 'The book called '+title+' by '+author+' has '+likes+' likes.';
console.log(result);

//Template String Way
let result1 = `The book called ${title} by ${author} has ${likes} likes`;
console.log(result1);

//Creating html templates using Template String
let html = `
  <h2>${title}</h2>
  <p>${author}</p>
  <span>This blog has ${likes} likes </span>
`;

console.log(html);




