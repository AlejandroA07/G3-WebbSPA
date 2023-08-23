const weatherInfoElement = document.getElementById('wind'); 
const cityElement = document.getElementById('stad');
const temperatureElement = document.getElementById('temp');
const descriptionElement = document.getElementById('weatherdesc');
const humidityElement = document.getElementById('humidity');
const iconElement = document.getElementById('icon');
let errorMessageElement = document.getElementById('error-message')


//geolocation
function fetchWeatherData(latitude, longitude, city) {
    let apiUrl = '';
    errorMessageElement.textContent = '';

    if (latitude && longitude) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=sv&appid=5f8720cba1f10e09507ee30899b138a5`;
    }
    else if (city) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&lang=sv&appid=5f8720cba1f10e09507ee30899b138a5`
    }
    else {
        console.log('Felaktig inmatning');
        errorMessageElement.textContent = 'Felaktig inmatning';

    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {


            const temperature = Math.round(data.main.temp);
            temperatureElement.textContent = `${temperature.toString()}�C`;

            const windSpeed = Math.round(data.wind.speed);
            weatherInfoElement.textContent = `${windSpeed.toString()}m/s`;

            cityElement.textContent = `${data.name}`;

            humidityElement.textContent = `${data.main.humidity} %`;

            descriptionElement.textContent = `${data.weather[0].description}`;

            if (data.weather[0].main == 'Clouds') {
                iconElement.src = '/wwwroot/images/clouds.png';
            }
            else if (data.weather[0].main == 'Clear') {
                iconElement.src = '/wwwroot/images/clear.png';
            }
            else if (data.weather[0].main == 'Rain') {
                iconElement.src = '/wwwroot/images/rain.png';
            }
            else if (data.weather[0].main == 'Drizzle') {
                iconElement.src = '/wwwroot/images/drizzle.png';
            }
            else if (data.weather[0].main == 'Mist') {
                iconElement.src = '/wwwroot/images/mist.png';
            }
            else if (data.weather[0].main == 'Snow') {
                iconElement.src = '/wwwroot/images/snow.png';
            }

            weatherInfoElement.style.display = 'block';
        })
        .catch(error => {
            console.log('Error:', error);
            errorMessageElement.textContent = 'Ett fel uppstod, f�rs�k igen!';
        });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchWeatherData(latitude, longitude);
        }, error => {
            console.log('Error:', error);
        });
    } else {
        console.log('Geolocation kan inte anv�ndas p� din browser.');
        errorMessageElement.textContent = 'Geolocation kan inte anv�ndas p� din browser.';
    }
}

//S�ker p� plats
function searchWeatherByCity() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function searchWays() {
        const city = searchInput.value.trim();
        if (city) {
            fetchWeatherData(null, null, city);
        }
        else {
            errorMessageElement.textContent = 'Skriv in en befintlig stad';
        }
    }

    searchButton.addEventListener('click', searchWays);

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchWays();
        }
    });
}

// laddar in v�dret n�r siddan laddas 
window.addEventListener('load', getLocation);

// Laddar in v�der vid s�kning p� plats
    searchWeatherByCity();
