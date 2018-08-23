var getuser = (id, callback) =>{
    var user ={
        id : id,
        name : 'Alberto'
    };
    setTimeout(() => {
        callback(user);    
    }, 3000);
};

getuser(31,(userObject) => {
    console.log(userObject);
});
// https://maps.googleapis.com/maps/api/geocode/json

//API key created
//Use this key in your application by passing it with the key=API_KEY parameter.
// AIzaSyAVvNWjVSo2PVwvl9t4bncCejXxWwFukhs

//https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyAVvNWjVSo2PVwvl9t4bncCejXxWwFukhs
