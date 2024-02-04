var firststring="ABC"
var secondstring="PQRST"
//merge these two strings
//APBQCRST

var smallestString=firststring.length<secondstring.length?firststring:secondstring
var mergedString=""
firststring.length>secondstring.length?firststring:secondstring

for(let i=0;i<smallestString.length;i++){
     let sub=firststring[i]+secondstring[i]
     mergedString+=sub


}
if(firststring.length>secondstring.length){
    let balance=firststring.slice(smallestString.length)
    mergedString+=balance

}
else{
    let balance=secondstring.slice(smallestString.length)
    mergedString+=balance

}
console.log(mergedString);