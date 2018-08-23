const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

    var encoded_address = encodeURIComponent(argv.address);
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyAVvNWjVSo2PVwvl9t4bncCejXxWwFukhs`; //`Template ${} string`
    

    //set strict-ssl false

    axios.get(geocodeUrl).then((response) =>{
        if (response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find theat address.!')
        }
        
        var lat_Address = response.data.results[0].geometry.location.lat ;
        var Lgn_Address = response.data.results[0].geometry.location.lng;
        //console.log(lat_Address);
        //console.log(Lgn_Address);
        var weatherURL = `https://api.darksky.net/forecast/cb0a2d6951bb8c474203324f945d21cc/${lat_Address},${Lgn_Address}`;
        console.log(response.data.results[0].formatted_address);
        //console.log(weatherURL);
        //console.log('Fetching Temperature data from darksky')
        return axios.get(weatherURL);

    }).then((response) => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently is ${temperature}. if feels like ${apparentTemperature}.`)
    }).catch((e) => {
        //console.log(e);
        if(e.code  === 'SELF_SIGNED_CERT_IN_CHAIN'){
            console.log('Unable to connect to API server.!')
        }else {
            console.log(e.message);
        };
    });

    

    