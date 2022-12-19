require('dotenv').config();
const express = require('express'); 
const app = express(); 
require('@babel/register');
const morgan = require('morgan'); 
const cors = require('cors');
const path = require('path');



//импорт вспомогательных ф-й
// const dbCheck = require('../db/dbCheck');


 // вызов функции проверки соединения с базоый данных
// dbCheck();

//подключаем сессию и файлсторадже для хранения куки
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const mainRouter = require('./routers/mainRouter');
const signUpRouter = require('./routers/signUpRouter');
const logInRouter = require('./routers/logInRouter');
const logOutRouter = require('./routers/logOutRouter');
const checkRouter = require('./routers/checkRouter')

// ! подключаем сессию и файлсторадже для хранения куки в РЕАКТЕ
const corsOptions = {
  credentials: true, 
  origin: 'http://localhost:3000'
}
const { SECRET } = process.env;

app.use(cors(corsOptions));
app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//создаем куки
// время жизни cookies, ms (10 дней)
const sessionConfig = {
  name: 'sid', 
  store: new FileStore({}), 
  secret: SECRET || 'ee29adc3165fecb20efe', 
  resave: false, 
  saveUninitialized: false, 
  cookie: {
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 1000 * 60 * 60 * 24 * 10, 
  },
};

// мидлварка для сессии
app.use(session(sessionConfig));

app.use('/', mainRouter);
app.use('/signup', signUpRouter);
app.use('/signin', logInRouter);
app.use('/signout', logOutRouter)
app.use('/check', checkRouter)

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
