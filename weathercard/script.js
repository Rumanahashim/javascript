

function displayweather(data){
    let currentdate=new Date()
    let date=currentdate.getDate()
    let month=currentdate.toLocaleString("default",{month:'long'})
    let year=currentdate.getFullYear()
    let htmldata=`
    <div class="card">
    <div class="container">
      <div class="cloud front">
        <span class="left-front"></span>
        <span class="right-front"></span>
      </div>
      <span class="sun sunshine"></span>
      <span class="sun"></span>
      <div class="cloud back">
        <span class="left-back"></span>
        <span class="right-back"></span>
      </div>
    </div>
  
    <div class="card-header">
      <span>Messadine, Susah<br>${data.name}</span>
      <span>${date} ${month} ${year}</span>
    </div>
  
    <span class="temp">${data.main.temp}</span>
  
    <div class="temp-scale">
      <span>Celcius</span>
    </div>
  </div>
    `
document.querySelector('#result').innerHTML=htmldata
}  
fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=kollam&appid=8f9164d0bb1a347b51a7d0e25e247b6c").
then(res=>res.json()).then(data=>displayweather(data))


function fetchDetails(){
  let city=box.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=8f9164d0bb1a347b51a7d0e25e247b6c`).
then(res=>res.json()).then(data=>displayweather(data))

}