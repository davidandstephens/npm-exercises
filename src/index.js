const $ = require('jquery');
const { sayHelloAgain } = require('./say-hello');

const sayHello = () => console.log('hello');

sayHello();

console.log(sayHelloAgain());

$('body').css('background-color', 'lavender').html('<h1>Hello from JS!</h1>');