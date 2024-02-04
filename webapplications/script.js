function getRandomNumbers(){
   console.log( Math.floor(Math.random()*100));
}
// setTimeout(getRandomNumbers,500)
// setInterval(getRandomNumbers,5000)
let interval=setInterval(getRandomNumbers,500)

function stop(){
    clearInterval(interval)
}
setTimeout(stop,5000)

