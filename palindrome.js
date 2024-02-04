// var len=text.length-1
// var reverse=""

// for(let i=len;i>=0;i--){
//     let char=text[i]
//     reverse+=char
// }
// console.log(reverse==text?"palindrome":"not palindrome");



var text="script"
var reversedString=text.split("").reverse().join("")
console.log(reversedString==text?"palindrome":"not palindrome");
