const yargs = require('yargs');

const geocode = require('../geocode/geocode')
const weather = require('../weather/weather')
var lat = '';
var lgn = '';

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

    //not doing the DRY (dont repeat yourself) principal
    geocode.geocodeAddress(argv.address, (errorMessage,results) =>{
        if(errorMessage){
            console.log(errorMessage);
        }else {
        //console.log(JSON.stringify(results,undefined,2));
        console.log(results.address)
        //weather.getweather(26.0282828,-80.35583799999999);
        weather.getweather(results.latitude,results.longitude, (errorMessage,weatherResults) =>{
        //weather.getweather(26.0282828,-80.35583799999999, (errorMessage,weatherResults) =>{
        //console.log(lat);
        //console.log(lgn);
        if(errorMessage){
                 console.log(errorMessage);
             }else {
             //console.log(JSON.stringify(weatherResults,undefined,2));
             console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
             }
         });
             }
    });

    // lat, lgn

// // weather.getweather(26.0282828,-80.35583799999999);
// weather.getweather(lat, lgn, (errorMessage,results) =>{
// //weather.getweather(26.0282828,-80.35583799999999, (errorMessage,weatherResults) =>{
//     //console.log(lat);
//     //console.log(lgn);
//     if(errorMessage){
//              console.log(errorMessage);
//          }else {
//          console.log(JSON.stringify(weatherResults,undefined,2));
//          }
//      });