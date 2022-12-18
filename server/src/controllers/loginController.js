const renderTemplate = require('../lib/renderReactModel');
const Login = require('../views/Login');
const { User } = require("../../db/models")
const bcrypt = require('bcrypt');

const renderLogin = (req, res) => {
    try {
        renderTemplate(Login, null, res);
    } catch (err) {
        console.log(err);
    }
}

const postLogin = async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await User.findOne({ where: { name } });
        const isAuth = await bcrypt.compare(password, user.password);
        if (user) {
            if (isAuth) {
                req.session.user = user;
                req.session.save(() => {
                    res.redirect('/');
                });
            } else {
                res.send('Неверный логин или пароль')
            }
        } else {
            res.send('Нет такого пользователя')
        }
    } catch (err) {
     console.log(err);
    }
}

const logoutRend = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) next(err);
        res.clearCookie('sid');
        res.redirect('/');
    })
};
module.exports = { renderLogin, postLogin, logoutRend };