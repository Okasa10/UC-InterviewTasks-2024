
let btn = document.getElementById("button-addon2");
let display = document.getElementById("w-display");

//ADD PROPER TRY CATCH



btn.addEventListener("click", () => {
    let city = document.getElementById("input").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50693346e65e897ebe2ee6818d7e63b4&units=metric`)
        .then((response) => {
            
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("Sorry for the inconvenience there is some issue while fetching weather data");
            }
        })
        .then((json) => {
            console.log(json)

            display.innerHTML = `
                    <ul>
                    <li>Temperature: ${json.main.temp}<sup>o</sup>C</li>
                    <li>Humidity: ${json.main.humidity}%</li>
                    <li>Maximum temperature: ${json.main.temp_max}<sup>o</sup>C</li>
                    <li>Minimum temperature: ${json.main.temp_min}<sup>o</sup>C</li>
                    <li>Windspeed: ${json.wind.speed} km/h</li>
                    <li>Forecast: ${json.weather[0].description.toUpperCase()}</li>
                </ul>
            `
        })
        .catch((error) => {
            alert(error);
        })
})







