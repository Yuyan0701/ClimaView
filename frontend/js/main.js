/**
 * Fetch and display weather data from backend API.
 * Add weather icons and dynamic background based on weather condition.
 */
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  resultDiv.innerHTML = `<div class="text-center text-white">Loading...</div>`;

  try {
    const response = await fetch(`http://localhost:5000/api/weather/${city}`);
    const data = await response.json();

    // Get weather main condition (e.g., Clouds, Clear, Rain)
    const condition = data.weather[0].main;

    // Choose icon based on condition
    let weatherIcon = "";
    switch (condition) {
      case "Clear":
        weatherIcon = "☀️";
        document.body.style.background = "linear-gradient(135deg, #f6d365, #fda085)";
        break;
      case "Clouds":
        weatherIcon = "☁️";
        document.body.style.background = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
        break;
      case "Rain":
        weatherIcon = "🌧️";
        document.body.style.background = "linear-gradient(135deg, #667db6, #485563)";
        break;
      case "Snow":
        weatherIcon = "❄️";
        document.body.style.background = "linear-gradient(135deg, #e0eafc, #cfdef3)";
        break;
      case "Thunderstorm":
        weatherIcon = "⛈️";
        document.body.style.background = "linear-gradient(135deg, #4b79a1, #283e51)";
        break;
      default:
        weatherIcon = "🌡️";
        document.body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
    }

    resultDiv.innerHTML = `
      <div class="col-md-6">
        <div class="card text-center p-4 weather-card">
          <h3>${data.name}</h3>
          <p style="font-size: 48px;">${weatherIcon}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
        </div>
      </div>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<div class="text-center text-danger">City not found or API error.</div>`;
  }
}
