function displaynumber(num){
    result.value+=num
}
function clearbox(){
    result.value=""
}
function evalexpression(){
    let currentexpression=result.value
    let output=eval(currentexpression)
    result.value=output
}
function backspace(){
    let currentvalue=result.value.slice(0,-1)
    result.value=currentvalue

}
