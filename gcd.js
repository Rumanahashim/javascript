var num1=12
var num2=24
var gcd=1
var minnum=num1<num2?num1:num2
for(let i=2;i<=minnum;i++){
    if(num1%i==0 && num2%i==0){
        gcd=i
    }
}
console.log(gcd)