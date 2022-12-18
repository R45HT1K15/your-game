const renderTemplate = require('../lib/renderReactModel');
const Main = require("../views/Main");

const renderMain = async (req, res) => {
    try {
        const { user } = req.session;
        renderTemplate(Main, { user }, res);
    } catch (error) {
        console.log(error);
    }
}


module.exports = { renderMain };