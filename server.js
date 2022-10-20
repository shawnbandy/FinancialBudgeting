const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers'); //*routes folder
const sequelize = require('./config/connection'); //*seq connection
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

//Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds
    maxAge: 1000 * 60 * 10 * 10000, //*expires after 10 minutes // 1000ms * 60 = 60s * 10 = 10min
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(routes);

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});

// // TODO: have to have another package for the requirements. maybe the math one?
// // TODO: have an edit and delete part for all things on the dashboard
// // TODO: have a getting started page to have a form
// // TODO: viewAll page

//TODO IF TIME:
// // *way around this is to make sure that the user creates a household on user creation?
//*need to have a display of the household and be able to select between them if we keep it
