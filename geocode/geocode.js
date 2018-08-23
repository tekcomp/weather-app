const request = require('request');
const proxy = 'http://proxy.miamidade.gov:8080';

var geocodeAddress = (Geo_address, callback) => {
var encoded_address = encodeURIComponent(Geo_address);

//console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyAVvNWjVSo2PVwvl9t4bncCejXxWwFukhs`);

 request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyAVvNWjVSo2PVwvl9t4bncCejXxWwFukhs`, //`Template ${} string`
    json: true,
    proxy
}, (error, response, body) => {
    if(error){
        callback('Unable to connect to google servers.')
    }else if(body.status === 'ZERO_RESULTS'){
        callback('Unable to find that address');
    }else if(body.status === 'OK'){
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
    }
});
}

//module.exports.geocodeAddress = geocodeAddress;

module.exports = {
    geocodeAddress
};