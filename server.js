const express = require('express');
const routes = require('./routes');
const exphbs = require('express-handlebars')
const sessions = require('express-session')
    // import sequelize connection
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//setting up handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
    //setting defualt route as public
app.use(express.static('public'));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});