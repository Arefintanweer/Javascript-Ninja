//logical operators : OR(||) AND(&&)
const password = "p@ssword";
if(password.length >=6 && password.includes('@')){
  console.log("that password is long enough");
  
}
else if(password.length>=12 || password.includes('@')){
  console.log("that password is mighty strong");
  
}else{
  console.log("password is not long enough");
  
}