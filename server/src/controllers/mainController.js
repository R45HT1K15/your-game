const renderTemplate = require('../lib/renderReactModel');
const Main = require("../views/Main");
const { SuperTopic, Topic, Question, IsCorrect, User, Stat } = require('../../db/models');

const renderMain = async (req, res) => {
    try {
        
        const { user } = req.session;
        if(user) {
            const userdb = await User.findOne({ where: { id: user.id } })
            let mainTopics
            if(userdb) {
                mainTopics = await SuperTopic.findAll({ include: { model: Topic, include: { model: Question, include: { model: IsCorrect, where: { user_id: user.id } } } }, order: [["id"]] });
            } else {
                mainTopics = await SuperTopic.findAll({ include: { model: Topic, include: { model: Question, include: { model: IsCorrect, where: { user_id: 1 } } } } });
            }
            // renderTemplate(Main, { user, mainTopics }, res);
            res.json(mainTopics)
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = { renderMain };