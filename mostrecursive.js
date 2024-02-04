var text="samplequestions"
//most frequent character
var wc={}
text.split("").map(ch=>ch in wc?wc[ch]+=1:wc[ch]=1)
console.log(Object.entries(wc).reduce((o1,o2)=>o1[1]>o2[1]?o1:o2));

