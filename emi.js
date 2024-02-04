var loanAmount=200000
var interestRate=9
var tenure=20
//monthly emi

//emi=p*I*(1+i)^n)/(1+i)^n-1
//r=interestrate/12
//i=r/100
//n=tenure/12
var p=loanAmount
var r=interestRate/12
var n=tenure*12
var I=r/100
var oneplusi=(1+I)**n
var EMI=(p*I*oneplusi)/(oneplusi-1)
console.log(Math.round(EMI))
//math{(round)} :method to round
