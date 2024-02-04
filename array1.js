//map()
//filter()
//reduce()
//sort


//map 
var arr=[10,2,3,4,5]

var sq=arr.map((n)=>n**2)
console.log(sq);

var cubes=arr.map((n)=>n**3)
console.log(cubes);

//filter

//evens

var evens=arr.filter((n)=>n%2==0)
console.log(evens);

var numGtFive=arr.filter((n)=>n>5)
console.log(numGtFive);

//reduce :it contain two parameters

//sum

var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);

//max

var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);

//min

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min); 

var srt=arr.sort((obj1,obj2)=>obj1-obj2)
console.log(srt);