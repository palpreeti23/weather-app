let apikey = '063ac03818277defbe13ce4ee3bb9c17'
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const inputBtn = document.querySelector(".input");
const searchBtn = document.querySelector('.btn');
const city = inputBtn.value;
searchBtn.addEventListener('click', () => {
    searchCity(inputBtn.value)
});

if(inputBtn.value===''){
    alert('write a city name');
}
else
{
    async function searchCity(city){

        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        const data = await response.json();
        console.log(data)
    
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.humi-level').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind-level').innerHTML = data.wind.speed + "km/h";
    }
    
}

