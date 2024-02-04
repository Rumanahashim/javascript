function performaddition(){
    let num1=document.querySelector("#box1").value
    let num2=document.querySelector("#box2").value
    let result=Number(num1)+Number(num2)
    
    document.querySelector("#resultbox").innerHTML=`Addition result of ${num1}+${num2}=${result}`
}
function performsubtraction(){
    let num1=+box1.value
    let num2=+box2.value
    let result=(num1)-(num2)

    document.querySelector("#resultbox").innerHTML=`subtraction result of ${num1}-${num2}=${result}`
}
function performmultiplication(){
    let num1=+box1.value
    let num2=+box2.value
    let result=(num1)*(num2)

    document.querySelector("#resultbox").innerHTML=`multiplication result of ${num1}*${num2}=${result}`
}
function performdivision(){
    let num1=+box1.value
    let num2=+box2.value
    let result=(num1)/(num2)

    document.querySelector("#resultbox").innerHTML=`division result of ${num1}/${num2}=${result}`
}