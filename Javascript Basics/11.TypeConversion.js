//type conversion-turning one data type to another data type

let score = '100';
console.log(score + 1);
console.log(typeof score);

score = Number(100);
console.log(score + 1);
console.log(typeof score);
//string to number coversion = NaN
let result = Number('hello');
console.log(result);
//number to string conversion = string
let result1 = String(50);
console.log(result1);
console.log(typeof result1);

let result2 = Boolean(100); //truthy
console.log(result2,typeof result2);
let result3 = Boolean(0);//falsy
console.log(result3,typeof result3);
let result4 = Boolean(-100);//truthy
console.log(result4,typeof result4);

let result5= Boolean('100');//truthy
console.log(result5,typeof result5);
let result6= Boolean('0');//truthy
console.log(result6,typeof result6);
let result7= Boolean('');//falsy
console.log(result7,typeof result7);







