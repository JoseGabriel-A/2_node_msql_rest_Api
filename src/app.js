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


// middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());

// routes urls 
app.use(require('./routes/userRoutes'));


// static files