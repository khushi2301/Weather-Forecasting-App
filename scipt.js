const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');
async function checkWeather(city){
    const api_key = "c7bf6bb391adcc39c612162c0c339d70";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main.toLowerCase()){
        case 'clouds' :
            weather_img.src="assets/cloud.png";
            break;
        case 'clear' :
            weather_img.src="assets/clear.png";
            break;
        case 'rain' :
            weather_img.src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExempsYzB3a2poY3djeGI1M3loZzczZG53aXR3ZTdsbG80Z3ZpMzBzNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PbOaO2fedzQLm/200.gif";
            break;
        case 'mist' :
            weather_img.src="assets/mist.png";
            break;
        case 'snow' :
            weather_img.src="assets/snow.png";
            break;

    }

    console.log(weather_data);
}




    searchBtn.addEventListener('click', ()=>{
        checkWeather(inputBox.value);
    });