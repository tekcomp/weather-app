const request = require('request');
const proxy = process.env.http_proxy || 'http://proxy.miamidade.gov:8080';

var getweather =(lat_Address,Lgn_Address, callback) => {
//var getweather = () =>{
    request({
        //url: 'https://api.darksky.net/forecast/cb0a2d6951bb8c474203324f945d21cc/26.0282828,-80.35583799999999', //`Template ${} string`
        url: `https://api.darksky.net/forecast/cb0a2d6951bb8c474203324f945d21cc/${lat_Address},${Lgn_Address}`, 
        json: true,
        proxy,
        strictSSL: false
    }, (error, response, body) => {
    
        if(!error && response.statusCode === 200){
            //console.log(body.currently.temperature);
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
            } else {
                //console.log('Unable to fetch Weather.');
                callback('Unable to fetch Weather.')
            }    
        
    });
    
}

module.exports = {
    getweather
}
 