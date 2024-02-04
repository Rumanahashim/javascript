var text="quick brown fox jumped over the lazy dogs"
var alphabets="abcdefghijklmnopqrstuvwxyz"
var ispanagram=true
for(let ch of alphabets){
    if(text.indexOf(ch)==-1){
        ispanagram=false
        break

    }

    
}
console.log(ispanagram);