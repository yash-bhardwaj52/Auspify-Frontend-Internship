const API_KEY = "183209f84f33d320b463e58d7c7872d6";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";




const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const weatherCard = document.getElementById("weatherCard");
const welcomeMessage = document.getElementById("welcomeMessage");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const weatherDescription = document.getElementById("weatherDescription");

const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");

const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");



async function searchWeather() {

    const city = cityInput.value.trim();

    // Empty input validation
    if (city === "") {
        showError("Please enter a city name.");
        cityInput.focus();
        return;
    }

    // Show loading state
    showLoading();

    try {

        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        // Handle API errors
        if (!response.ok) {

            if (response.status === 400) {
                throw new Error("Please enter a valid city name.");
            }

            if (response.status === 401) {
                throw new Error(
                    "Invalid API key. Please check your OpenWeather API key."
                );
            }

            if (response.status === 404) {
                throw new Error(
                    "City not found. Please check the spelling and try again."
                );
            }

            if (response.status === 429) {
                throw new Error(
                    "Too many requests. Please try again later."
                );
            }

            throw new Error(
                "Unable to fetch weather data. Please try again."
            );
        }

        // Convert response to JSON
        const data = await response.json();

        // Display weather
        displayWeather(data);

        // Save last searched city
        localStorage.setItem("lastWeatherCity", city);

    }

    catch (error) {

        console.error("Weather API Error:", error);

        showError(error.message);

    }

    finally {

        hideLoading();

    }
}




function displayWeather(data) {

    // City name + country
    cityName.textContent =
        `${data.name}, ${data.sys.country}`;


    // Weather description
    weatherDescription.textContent =
        data.weather[0].description;


    // Weather icon
    const iconCode = data.weather[0].icon;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherIcon.alt =
        data.weather[0].description;


    // Temperature
    temperature.textContent =
        Math.round(data.main.temp);


    // Feels like
    feelsLike.textContent =
        Math.round(data.main.feels_like);


    // Humidity
    humidity.textContent =
        `${data.main.humidity}%`;


    // Wind speed
    windSpeed.textContent =
        `${data.wind.speed} m/s`;


    // Atmospheric pressure
    pressure.textContent =
        `${data.main.pressure} hPa`;


    // Visibility
    if (data.visibility !== undefined) {

        visibility.textContent =
            `${(data.visibility / 1000).toFixed(1)} km`;

    } else {

        visibility.textContent = "N/A";

    }


    // Show weather card
    weatherCard.classList.remove("hidden");

    // Hide welcome message
    welcomeMessage.classList.add("hidden");

    // Clear old error
    errorMessage.textContent = "";

    // Update page title
    document.title =
        `${data.name} Weather | Weather Dashboard`;
}



function showLoading() {

    loading.classList.remove("hidden");

    weatherCard.classList.add("hidden");

    welcomeMessage.classList.add("hidden");

    errorMessage.textContent = "";

    // Disable search button
    searchBtn.disabled = true;

    searchBtn.textContent = "Searching...";

}




function hideLoading() {

    loading.classList.add("hidden");

    // Enable search button
    searchBtn.disabled = false;

    searchBtn.textContent = "Search";

}

function showError(message) {

    errorMessage.textContent = message;

    weatherCard.classList.add("hidden");

    welcomeMessage.classList.remove("hidden");

}

cityInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchWeather();

        }

    }
);




searchBtn.addEventListener(
    "click",
    searchWeather
);



cityInput.addEventListener(
    "input",
    function () {

        errorMessage.textContent = "";

    }
);




function loadLastCity() {

    const lastCity =
        localStorage.getItem("lastWeatherCity");

    if (lastCity) {

        cityInput.value = lastCity;

        searchWeather();

    }

}

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadLastCity();

    }
);