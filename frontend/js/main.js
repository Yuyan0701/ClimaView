/**
 * Fetches weather data from backend API and displays it.
 */
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const resultDiv = document.getElementById('weatherResult');

    // Show loading message while fetching data
    resultDiv.innerHTML = `<div class="text-center text-white">Loading...</div>`;

    try {
        // Call backend API: http://localhost:5000/api/weather/:city
        const response = await fetch(`http://localhost:5000/api/weather/${city}`);
        const data = await response.json();

        // Render weather result with animated card
        resultDiv.innerHTML = `
            <div class="col-md-6">
                <div class="card text-center p-4 weather-card">
                    <h3>${data.name}</h3>
                    <p>🌡️ Temperature: ${data.main.temp}°C</p>
                    <p>☁️ Weather: ${data.weather[0].description}</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                </div>
            </div>
        `;
    } catch (error) {
        // Handle errors (e.g. city not found or API failure)
        resultDiv.innerHTML = `<div class="text-center text-danger">City not found or API error.</div>`;
    }
}

/**
 * Theme toggle: switch between dark and light modes.
 */
const themeButton = document.getElementById('themeToggle');

// Default mode is light
document.body.classList.add('light-mode');

// Add event listener for theme toggle button
themeButton.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeButton.textContent = '☀️'; // Change icon to sun
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeButton.textContent = '🌙'; // Change icon to moon
    }
});
