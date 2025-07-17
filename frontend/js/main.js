async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const resultDiv = document.getElementById('weatherResult');
    resultDiv.innerHTML = `<div class="text-center text-white">Loading...</div>`;

    try {
        const response = await fetch(`http://localhost:5000/api/weather/${city}`);
        const data = await response.json();

        resultDiv.innerHTML = `
            <div class="col-md-6">
                <div class="card text-center p-4">
                    <h3>${data.name}</h3>
                    <p>🌡️ Temperature: ${data.main.temp}°C</p>
                    <p>☁️ Weather: ${data.weather[0].description}</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                </div>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<div class="text-center text-danger">City not found or API error.</div>`;
    }
}
