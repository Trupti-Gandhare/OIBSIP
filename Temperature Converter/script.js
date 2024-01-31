function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    var temperature = parseFloat(temperatureInput);

    var resultElement = document.getElementById("result");
    var result;

    if (unit === "celsius") {
        result = {
            fahrenheit: (temperature * 9/5) + 32,
            kelvin: temperature + 273.15
        };
    } else if (unit === "fahrenheit") {
        result = {
            celsius: (temperature - 32) * 5/9,
            kelvin: (temperature - 32) * 5/9 + 273.15
        };
    } else if (unit === "kelvin") {
        result = {
            celsius: temperature - 273.15,
            fahrenheit: (temperature - 273.15) * 9/5 + 32
        };
    }

    resultElement.innerHTML = `
        <p>Converted Temperature:</p>
        <p>Celsius: ${result.celsius ? result.celsius.toFixed(2) : "N/A"}</p>
        <p>Fahrenheit: ${result.fahrenheit ? result.fahrenheit.toFixed(2) : "N/A"}</p>
        <p>Kelvin: ${result.kelvin ? result.kelvin.toFixed(2) : "N/A"}</p>
    `;
}