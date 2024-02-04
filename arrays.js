//array[]
//push():add to end
//unshift():add to begining
//pop():remove from end
//shift():remove from begining
//reverse()
var languages=["python","java","html","js"]
console.log(languages[1]);
for(i=0;i<languages.length;i++){
    console.log(languages[i]);

}
languages[1]="php"
console.log(languages);
languages.push("c++")
console.log(languages)
languages.unshift("c")
console.log(languages);
languages.pop()
console.log(languages);
languages.shift()
console.log(languages);
languages.reverse()
console.log(languages);
