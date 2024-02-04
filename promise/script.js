var mypromise=new Promise((res,rej)=>{
    let completedstatus=true
    if(completedstatus==true){
        res("completed")
    }
})
mypromise.then(res=>console.log("name will be marked in placement form"))