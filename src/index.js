//import './styles.css'

const button = document.querySelector("button");
const body = document.querySelector("body");
async function getWeatherData(city){
    if(!city.trim){
        throw new Error("No city name entered.");
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=65QXH3P9APGHLEBPSVUNGF53V&contentType=json`;
    try{
        const jsonContent = await fetchResponse(url);
        //console.log(jsonContent);
        console.log('Current Temperature:');
        console.log(jsonContent);
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

button.addEventListener("click",()=>{
   getWeatherData("montreal");
})