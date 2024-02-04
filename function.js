//function functionName(p1,p2){
       //return value
//}
//function calling(p1,p2)

//hoisting

function maxTwo(num1,num2){
    return num1>num2?num1:num2
}
console.log(maxTwo(10,20))

//127,870
function nthDigitMax(num1,num2){
    // var x=num1%10
    // var y=num2%10
    // return x>y?num1:num2
    return num1%10>num2%10?num1:num2

}
console.log(nthDigitMax(127,870))

//nextprime NUMBER
function isPrime(num){
    let isprimeNum=true
    for(let i=2;i<num;i++){
        if(num%i==0){
            isprimeNum=false
            break
        }


    }
    return isprimeNum
       
}
function nextprime(num){
    let nextNum=num+1
    while(!isPrime(nextNum)){
        nextNum++
    }
    return nextNum
}
console.log(nextprime(150));

//isfibonum
//next fiboccinum

