const renderTemplate = require('../lib/renderReactModel');
const TopicV = require('../views/Topic');
const { Topic, IsCorrect, Question } = require('../../db/models');

exports.renderTopic = async (req, res) => {
    try {
        const { user } = req.session;
        const topics = await Topic.findAll({ where: { tema_id: req.params.name }, include: Question });
        let isCorrect
        topics.map((topic) => {
            topic.Questions.map( async (quest) => {
                isCorrect = await IsCorrect.findOrCreate({ where: { user_id: user.id, question_id: quest.id }, defaults: { status: true }})
                return isCorrect
            })
        })
    } catch (error) {
        console.log(error);
    }
}

exports.updateStat = async (req, res) => {
    try {
        const { user } = req.session;
        const { id } = req.body;
        console.log('id', id)
        const isCorrect = await IsCorrect.update({ status: false }, { where: { user_id: user.id, question_id: id }})
        res.json(isCorrect)
    } catch (error) {
        console.log(error)
    }
}