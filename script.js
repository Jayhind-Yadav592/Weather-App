
const API_KEY = ''; // OpenWeatherMap API key would go here

// Weather icon mapping
const weatherIcons = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Smoke': '🌫️',
    'Haze': '🌫️',
    'Dust': '🌫️',
    'Fog': '🌫️',
    'Sand': '🌫️',
    'Ash': '🌫️',
    'Squall': '💨',
    'Tornado': '🌪️'
};

document.getElementById('cityInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});

async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();

    if (!city) {
        showError('Please enter a city name');
        return;
    }

    showLoading();
    hideError();
    hideWeatherInfo();

    try {
        // Using wttr.in as a free weather API alternative
        const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data, city);
        hideLoading();
    } catch (error) {
        hideLoading();
        showError('City not found. Please try again.');
    }
}

function displayWeather(data, city) {
    const current = data.current_condition[0];
    const weatherDesc = current.weatherDesc[0].value;

    document.getElementById('location').textContent = city.charAt(0).toUpperCase() + city.slice(1);
    document.getElementById('temperature').textContent = `${current.temp_C}°C`;
    document.getElementById('description').textContent = weatherDesc;
    document.getElementById('feelsLike').textContent = `${current.FeelsLikeC}°C`;
    document.getElementById('humidity').textContent = `${current.humidity}%`;
    document.getElementById('windSpeed').textContent = `${current.windspeedKmph} km/h`;
    document.getElementById('pressure').textContent = `${current.pressure} mb`;

    // Set weather icon
    let icon = '🌤️';
    for (const [key, value] of Object.entries(weatherIcons)) {
        if (weatherDesc.toLowerCase().includes(key.toLowerCase())) {
            icon = value;
            break;
        }
    }
    document.getElementById('weatherIcon').textContent = icon;

    showWeatherInfo();
}

function showLoading() {
    document.getElementById('loading').classList.add('active');
}

function hideLoading() {
    document.getElementById('loading').classList.remove('active');
}

function showError(message) {
    const errorEl = document.getElementById('error');
    errorEl.textContent = message;
    errorEl.classList.add('active');
}

function hideError() {
    document.getElementById('error').classList.remove('active');
}

function showWeatherInfo() {
    document.getElementById('weatherInfo').classList.add('active');
}

function hideWeatherInfo() {
    document.getElementById('weatherInfo').classList.remove('active');
}

// Load weather for default city on page load
window.addEventListener('load', function () {
    document.getElementById('cityInput').value = 'Hyderabad';
    getWeather();
});
