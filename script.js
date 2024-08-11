let apikey = '063ac03818277defbe13ce4ee3bb9c17'
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const inputBtn = document.querySelector(".input");
const searchBtn = document.querySelector('.btn');
const weatherIcon = document.querySelector('.weather-img')
const city = inputBtn.value;

searchBtn.addEventListener('click', () => {
    searchCity(inputBtn.value)
});


async function searchCity(city) {

    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data)

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.humi-level').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind-level').innerHTML = data.wind.speed + "km/h";

    
if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png"
}
else if(data.weather[0].main == "Clouds"){
     weatherIcon.src = 'images/clouds.png'
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = 'images/clear.png'
}
else if(data.weather[0].main == "Drizzel"){
    weatherIcon.src = 'images/drizzel.png'
}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = 'images/snow.png'
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = 'images/mist.png'
}

}


