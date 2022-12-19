const renderTemplate = require('../lib/renderReactModel');
const Main = require("../views/Main");
const { SuperTopic, Topic, Question } = require('../../db/models');

const renderMain = async (req, res) => {
    try {
        const mainTopics = await SuperTopic.findAll({ include: { model: Topic, include: { model: Question } } });
        const { user } = req.session;
        localStorage.setItem('mainTopics', JSON.stringify(mainTopics))
        // renderTemplate(Main, { user, mainTopics }, res);
        res.json(mainTopics)
    } catch (error) {
        console.log(error);
    }
}


module.exports = { renderMain };