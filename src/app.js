//2022-06-09 second rest api model
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//settings
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('server on port: ' + app.get('port'));
});


// middlewares, son funciones que se ejecutan cada vez que recibo una peticion

app.use(morgan('dev')); // gracias a esto puedo ver los request por consola.
app.use(bodyParser.json()); //con bodyParser puedo comprender los msjs de la rest api

// routes urls de nuestro servidor
app.use(require('./routes/userRoutes'));


// static files