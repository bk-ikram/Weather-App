import '.\styles.css'

function getWeatherData(city){
    if(!city.trim){
        throw new Error("No city name entered.");
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=65QXH3P9APGHLEBPSVUNGF53V&contentType=json`;

}

async function fetchResponse(url){
    const response = await fetch(url);
    
}
