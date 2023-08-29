const express = require('express');
//const db = require('./db')
const app = express();
const bodyParser = require('body-parser');
const salesorder_route = require('./routes/salesorder_routes')
const users_route = require('./routes/users_routes')
const register_route = require('./routes/register_routes')
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))
// Parse request bodies as JSON
app.set('view engine', 'ejs')
app.set('views', 'views')
// middleware & static files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
// sales routs 
app.use(salesorder_route)

// users routs 
app.use(users_route)

// users routs 
app.use(register_route)

app.get('/', (req, res) => {
    res.render('login',{
        title:'Mini - ERP | Dashboard'
    });
});

app.get('/home', (req, res) => {
    res.render('index',{
        title:'Mini - ERP | Dashboard'
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/forgot-password', (req, res) => {
    res.render('forgot-password');
});
app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/404', (req, res) => {
    res.render('404');
});


