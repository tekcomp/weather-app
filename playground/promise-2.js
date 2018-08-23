const request = require('request');
const proxy = 'http://proxy.miamidade.gov:8080';

var geocodeAddress = (Geo_address) =>{
    var encoded_address = encodeURIComponent(Geo_address);

    return new Promise((resolve, reject) => {  

     request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyAVvNWjVSo2PVwvl9t4bncCejXxWwFukhs`, //`Template ${} string`
        json: true,
        proxy
    }, (error, response, body) => {
        if(error){
            reject('Unable to connect to google servers.')
        }else if(body.status === 'ZERO_RESULTS'){
            reject('Unable to find that address');
        }else if(body.status === 'OK'){
            resolve( {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
});
};

geocodeAddress('33028').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
},(errorMessage) => {
    console.log(errorMessage);
})