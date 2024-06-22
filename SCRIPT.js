const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const  weatherBox= document.querySelector('.weather-box');
const weatherDetails= document.querySelector('.weather-details');

search.addEventListener('click', ()=> {

    const APIkey='7d09d69f4f21bdc6523576270056cfa4';
    const city =document.querySelector('.search-box input').value;

    if (city =='')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={API key}').then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temparature = document.querySelector('.weather-box .temparature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                Image.src='clear.png';
                break;
            case 'Rain':
                Image.src='rain.png';
                break;
            case 'Snow':
                Image.src='snow.png';
                break;
            case 'Cloud':
                Image.src='cloud.png';
                break;
            case 'Mist':
                Image.src='mist.png';
                break;
            case 'Haze':
                Image.src='haze.png';
                break;
            default:
                Image.src='cloud.png';
                break;
        }
    });
})