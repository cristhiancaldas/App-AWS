const path = require('path');
const express=require('express');
const app=express();

const indexRoutes = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRoutes);

app.listen(3000, function(){
    console.log('Server Port 3000');
});

