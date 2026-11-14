const windSpeed = 11.5;
const temperature = 2;
const windChillData = document.querySelector("#windChill");

function calculateWindChill(temperature, windSpeed){
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed**0.16);
}

let windChill = calculateWindChill(temperature, windSpeed)

windChillData.textContent = `${windChill.toFixed(2)} Cº`;

console.log(`${windChill.toFixed(2)} Cº`);
