var num=153
var original=num
var digitcount=String(num).length
var sum=0
while(num!=0){
    let digit=num %10
    let pow=digit**digitcount
    sum=sum+pow
   num=Math.floor(num/10)
}
if(sum==original){
    console.log("amstrong");
}
else{
    console.log("not amstrong");
}