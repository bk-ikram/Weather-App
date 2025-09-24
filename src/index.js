//import './styles.css'

const form = document.querySelector("form");
const body = document.querySelector("body");
const input = document.querySelector("input");
const unitSelection = document.querySelector("#unitSelection");

//outut elements
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const conditions = document.querySelector("#conditions");
const windSpeed = document.querySelector("#wind-speed");

async function getWeatherData(city,units){
    if(!city.trim){
        throw new Error("No city name entered.");
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${units}&key=65QXH3P9APGHLEBPSVUNGF53V&contentType=json`;
    try{
        const jsonContent = await fetchResponse(url);    
        console.log('Current Temperature:');
        console.log(jsonContent);
        const currentTemp = jsonContent.currentConditions.temp;
        const currentFeelsLike = jsonContent.currentConditions.feelslike;
        const currentConditions = jsonContent.currentConditions.conditions;
        const currentWindSpeed = jsonContent.currentConditions.windspeed;
        const tempUnit = units === "us" ? "F" : "°C";
        const windUnit = units === "us" ? "mph" : "km/h";
        temp.textContent = `Temperature: ${currentTemp} ${tempUnit}`;
        feelsLike.textContent = `Feels Like: ${currentFeelsLike} ${tempUnit}`;
        conditions.textContent = `Conditions: ${currentConditions}`;
        windSpeed.textContent = `Wind Speed: ${currentWindSpeed} ${windUnit}`;
    }
    catch(e){
        console.log(`Error: ${e}`);
    }

}

async function fetchResponse(url){
    const response = await fetch(url);
    if(!response.ok){
        return new Error("Could not get a valid response;")
    }
    const json = await response.json();
    return json;
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    processForm();
})
unitSelection.addEventListener("click",(e)=>{
    processForm();
})

function processForm(){
    const data = new FormData(form);
    const city = data.get("location");
    const units = data.get("unitGroup");
    getWeatherData(city,units);
}