//variable declaration : var,let,const 
//var:modify,global scope 
// let:block level scope,modify
//const:cant modify
//var variableName=value

var companyName="luminar"
console.log("company name is",companyName);
companyName="luminar technolab"
console.log("company name",companyName);


var bankName="sbi"
var acno="123456"
var balance=123456
console.log("hi user your",acno,bankName,"account balance is",balance);
console.log(`hi user your ${acno} ${bankName} account  balance is ${balance}`);


var customerName="vipin"
var purchaseAmount=320
var invoiceNum=6197

//dear vipin ,your have made purchase of rs.320 vide inv.no6197
console.log(`dear ${customerName} , you have made purchase of Rs.${purchaseAmount} vide inv.no${invoiceNum}`);