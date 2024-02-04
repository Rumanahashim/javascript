//arrow function
//syntax: (p1,p2):return value for a single line
//multiple line
//(p1,p2){
//  return value  
//}
//arrow fn doesnt hoist

var sum=(num1,num2)=>num1+num2
console.log(sum(10,20));

var sub=(num1,num2)=>num1-num2
console.log(sub(10,5));

var square=(num)=>num**2
console.log(square(2));

var cube=(num)=>num**3
console.log(cube(3));

var maxTwo=(n1,n2)=>n1>n2?n1:n2
console.log(maxTwo(200,300));

var minTwo=(n1,n2)=>n1<n2?n1:n2
console.log(minTwo(200,300));

var isEven=(num)=>num%2==0?"true":"false"
console.log(isEven(16));
