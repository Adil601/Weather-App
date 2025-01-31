const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

document.body.classList.add("dark");
themeIcon.setAttribute("name", "sun"); 
themeIcon.setAttribute("color", "white");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeIcon.setAttribute("name", "moon"); 
        themeIcon.setAttribute("color", "black"); 
    } else {
        themeIcon.setAttribute("name", "sun"); 
        themeIcon.setAttribute("color", "white"); 
    }
});

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apiKey = "275127825585090fe640178f16cc163e"; 

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const cityQuery = cityInput.value.trim();

  if (cityQuery) {
    try {
      const weatherData = await getWeatherData(cityQuery);
      displayWeatherInfo(weatherData);
    } catch (error) {
      displayError("City not found! Please enter a valid city.");
    }
  } else {
    displayError("Please enter a city.");
  }
});

// Fetch Weather Data
async function getWeatherData(cityQuery) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error("Could not fetch weather data");
  return await response.json();
}

// Display Weather Data
function displayWeatherInfo(data) {
  document.querySelector(".cityDisplay").textContent = `${data.name}, ${data.sys.country}`;
  document.querySelector(".tempDisplay").textContent = `${data.main.temp.toFixed(1)}°C`;
  document.querySelector(".descDisplay").textContent = data.weather[0].description;
  document.querySelector(".humidityDisplay").textContent = `Humidity: ${data.main.humidity}%`;
}

// Show Error Messages
function displayError(message) {
  document.querySelector(".cityDisplay").textContent = "Error";
  document.querySelector(".tempDisplay").textContent = message;
}
