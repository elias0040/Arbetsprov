export default function fetchCityData(cityName){
    var api_url = new URL('http://api.geonames.org/searchJSON?q=empty&maxRows=1&username=weknowit');
    api_url.searchParams.set('q', cityName);
    console.log(api_url);
  
    const response = await fetch(api_url);
    const data = await response.json();
    
    return data;
}