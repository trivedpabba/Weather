var search = document.getElementById('search');


search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        var getCityName = e.target.value;
        getweather(getCityName);
    }
   
});

function getweather (getCityName) {
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=9d2c66b47b97d1611c8671602505d6e9`;
window
.fetch(weatherApi)
.then(data => {
    data
    .json()
    .then(weather => {
        var output = "";
       
   
        //array here
        var weatherData = weather.weather;
        for (let x of weatherData) {
            output +=`
            <div class="col-md-4 offset-4 mt-4 card">
                <div class="card-body">
                  <h1>${weather.name}</h1>
                  <span class="icon">
                  <img src="https://openweathermap.org/img/wn/${x.icon}.png"/></span>
                  <p><span>temp:</span>
                  <span class="temp">${weather.main.temp}&deg;c</span></p>
                  <span class="des float-left">${x.description}</span>
                  <span class="des float-right">${x.main}</span>
                </div>
            </div>
            `;
            document.getElementById("template").innerHTML = output;
         }
    })
    .catch(err => Console.log(err));
})
.catch(erro => Console.log(erro));
}

    


