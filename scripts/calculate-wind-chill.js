const windSpeed = 11.5;
const temperature = 2;
const windChillData = document.querySelector("#windChill");

function calculateWindChill(temperature, windSpeed){
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed**0.16);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8){
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(2)} Cº`;
}

windChillData.textContent = windChill;

