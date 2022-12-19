const { Topic, IsCorrect, Question, SuperTopic } = require('../../db/models');

exports.renderTopic = async (req, res) => {
    try {
        const { user } = req.session;
        const topics = await Topic.findAll({ where: { tema_id: req.params.name }, include: Question });
        let isCorrect
        topics.map((topic) => {
            topic.Questions.map( async (quest) => {
                isCorrect = await IsCorrect.findOrCreate({ where: { user_id: user.id, question_id: quest.id, tema: req.params.name }, defaults: { status: true }})
                return isCorrect
            })
        })
        console.log('govno')
    } catch (error) {
        console.log(error);
    }
}

exports.updateStat = async (req, res) => {
    try {
        const { user } = req.session;
        const { id } = req.body;
        const isCorrect = await IsCorrect.update({ status: false }, { where: { user_id: user.id, question_id: id } })
        res.json(isCorrect)
    } catch (error) {
        console.log(error)
    }
}

exports.endGame = async (req, res) => {
    try {
        console.log('req.body.name', req.body.name)
        const { user } = req.session;
        const tema = await SuperTopic.findOne({where: { tema: req.body.name }})
        console.log('tema', tema)
        const isCorrect = await IsCorrect.update({ status: true }, { where: { user_id: user.id, tema: tema.id.toString() } })
        res.json(isCorrect)
    } catch (error) {
        console.log(error)
    }
}