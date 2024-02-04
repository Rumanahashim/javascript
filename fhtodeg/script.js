// function fahrenheittodegree(){
//     let temp_indegree=document.querySelector("#value").value
//     let fh_result=+(temp_indegree)*(9/5)+32

//     document.querySelector("#resultvalue").innerHTML
//     alert(fh_result)
    
// }
function celsiousToFarhenheat(){
    let farenheat_indegree=document.querySelector("#value").value
    let result= +((farenheat_indegree-32) * +(5/9))

    document.querySelector("#resultvalue").innerHTML=`result of ${farenheat_indegree} = ${result} `


}