console.log('Starting app');

//abritrary delay callback function = a function that gets passed as another arguement to another function and executed after some of that happens...
setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() =>{
    console.log('Second SetTimeout');
}, 0);

console.log('Finishing up');
