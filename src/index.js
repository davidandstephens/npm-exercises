const $ = require('jquery');

const sayHello = () => console.log('hello');

sayHello();

$('body').css('background-color', 'lavender').html('<h1>Hello from JS!</h1>');