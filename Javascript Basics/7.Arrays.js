//Array is an object data type
//Can overwrite index values

let names =['shaun','ryu','chun-li'];
console.log(names);
console.log(names[0]);
names[0]='Mike';
console.log(names);

//Array methods

//length
console.log(names.length);

//join()
let result = names.join(',');
console.log(result);

//indexOf()
let result1 = names.indexOf('chun-li');
console.log(result1);

//concat()
let result3 = names.concat(['chester','rob']);
console.log(result3);

//push()
let result4 = names.push('ken');
console.log(result4); //4
console.log(names); 

//pop()
let result5 =names.pop();
console.log(result5);
console.log(names);












 


