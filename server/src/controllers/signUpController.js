const renderTemplate = require('../lib/renderReactModel');
const SignUp = require('../views/SignUp');
const { User } = require("../../db/models");
const bcrypt = require('bcrypt');

const renderSignUp = (req, res) => {
    try {
        renderTemplate(SignUp, null, res);
    } catch (err) {
        console.log(err);
    }
}

const postSignUp = async (req, res) => {
    const { name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name, password: hashedPassword });
        req.session.user = { id: user.id, name: user.name}
        req.session.save(() => {
            res.json(req.session.user)
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { renderSignUp, postSignUp }