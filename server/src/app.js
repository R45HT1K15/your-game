require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

const mainRouter = require('./routers/mainRouter');
const signUpRouter = require('./routers/signUpRouter');
const logInRouter = require('./routers/logInRouter');
const logOutRouter = require('./routers/logOutRouter');
const topicRouter = require('./routers/topicRouter');
const checkRouter = require('./routers/checkRouter')

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000'
}

const { SECRET, PORT } = process.env;

app.use(cors(corsOptions));
app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  name: 'sid',
  store: new FileStore({}),
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
}))

app.use('/', mainRouter);
app.use('/game', topicRouter);

app.use('/signup', signUpRouter);
app.use('/signin', logInRouter);
app.use('/signout', logOutRouter)
app.use('/check', checkRouter)

app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
