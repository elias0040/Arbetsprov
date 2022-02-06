async function fetchCityData() {
    //Initalize URL that data will be fetched from

    var api_url = new URL('http://api.geonames.org/searchJSON?q=empty&maxRows=1&username=weknowit'); 
    api_url.searchParams.set('q', input); //Set query parameter to user input from previos screen

    try{
        await axios
            .get(api_url)
            .then(res => {
                if(res.data.totalResultsCount > 0) setData(res.data.geonames[0]);
                setLoading(false);
            })
    }catch(error){
        console.log(error);
    }
}

async function fetchCountryData(){
        //Initalize URL that data will be fetched from

        var api_url = new URL('http://api.geonames.org/searchJSON?q=empty&username=weknowit'); 
        api_url.searchParams.set('q', input); //Set query parameter to user input from previos screen

        try{
            await axios
                .get(api_url)
                .then(res => {
                    if(res.data.totalResultsCount > 0) setData(res.data.geonames[0]);
                    setLoading(false);
                })
        }catch(error){
            console.log(error);
        }
}
