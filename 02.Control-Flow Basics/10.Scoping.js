//variable and block scope

let age = 30; //global scope

if(true){
  let age = 40; //redefined the variable/local scope
  console.log('inside 1st codeblock ',age);
}

console.log('outside codeblock ',age);


//when we use var it ignores block scoping.That's why we use let and const.