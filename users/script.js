

function displayusers(users){
    let htmldata=``
    users.forEach(u=>{
        htmldata+=`
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${u.title}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${u.email}</h6>
                  <p class="card-text"></p>
                  <div>  ${u.address.city}</div>

                  <div>${u.phone}</div>
                  
                </div>
              </div>
            
        </div>
        `

    })
    document.querySelector('#result').innerHTML=htmldata
}  
fetch("https://jsonplaceholder.typicode.com/users/").then(res=>res.json()).then(data=>displayusers(data))

