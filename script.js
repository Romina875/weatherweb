const inputBox =document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img =document.querySelector('.weather_img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const Wind_Speed = document.getElementById('Wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body =document.querySelector('.weather-body');




 async function checkweather(city){
const api_key= "6e37f23d67e38336433b9e01599b77ae";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
const weather_data = await fetch(`${url}`) .then(Response => Response .json());



if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    weather_body.style.display="none";
}
location_not_found.style.display = "none";
weather_body.style.display="flex";
temperature.innerHTML = `${Math.round(weather_data.main.temp -273.15)}°C`;
description.innerHTML = `${weather_data.weather[0].description}`;
humidity.innerHTML = `${weather_data.main.humidity}%`;
Wind_Speed.innerHTML = `${weather_data.main.wind.speed}Km/H`;

switch(weather_data.weather[0].main)
{
 case 'Clouds':
        weather_img.src ="/images/clouds.png";
        break;
        case 'Clear':
            weather_img.src ="/images/clear.png";
            break;
            case 'Rain':
                weather_img.src ="/images/rain.png";
                break;
                case 'Mist':
                    weather_img.src ="/images/mist.png";
                    break;
                    case 'Snow':
                        weather_img.src ="/images/snow.png";
                        break;
}


console.log(weather_data);
}

searchBtn.addEventListener('click',()=> {

            checkweather(inputBox.value)

});