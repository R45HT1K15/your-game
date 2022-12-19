const renderTemplate = require('../lib/renderReactModel');
const Main = require("../views/Main");
const { SuperTopic } = require('../../db/models');

const renderMain = async (req, res) => {
    try {
        const mainTopics = await SuperTopic.findAll();
        const { user } = req.session;
        renderTemplate(Main, { user, mainTopics }, res);
    } catch (error) {
        console.log(error);
    }
}


module.exports = { renderMain };