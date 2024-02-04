function nextFibonocciNum(num){
    let a=0;
    let b=1;
    while (a<=num){
        let c=a+b;
        a=b;
        b=c;
    }
    return a;

}

console.log(nextFibonocciNum(5));