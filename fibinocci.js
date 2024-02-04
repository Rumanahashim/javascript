var prev=0
var cur=1
console.log(prev)
console.log(cur)
var i=1
while(i<=10){
    next=prev+cur
    console.log(next)
    prev=cur
    cur=next
    i++
}    