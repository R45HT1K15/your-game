const renderTemplate = require('../lib/renderReactModel');
const Main = require("../views/Main");
const { SuperTopic, Topic, Question, IsCorrect } = require('../../db/models');

const renderMain = async (req, res) => {
    try {
        
        const mainTopics = await SuperTopic.findAll({ include: { model: Topic, include: { model: Question, include: { model: IsCorrect } } } });
        const { user } = req.session;
        // renderTemplate(Main, { user, mainTopics }, res);
        res.json(mainTopics)
    } catch (error) {
        console.log(error);
    }
}


module.exports = { renderMain };