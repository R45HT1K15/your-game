const { Question, IsCorrect, Stat, Topic } = require("../../db/models")
const bcrypt = require('bcrypt');

exports.answerCheck = async (req, res) => {
    try {
        const { questionId, answer } = req.body;
        const user = req.session.user;
        const question = await Question.findOne({ where: { id: questionId } });
        const topic = await Topic.findOne({ where: { id: question.topic_id } })
        // console.log('question', question)
        
        let scores
        if (question.answer.toLowerCase() === answer.toLowerCase()) {
            const stat = await Stat.findOne({ where: { user_id: user.id, tema_id: topic.tema_id }})
            scores = stat.scores + question.cost
            const updateStat = await Stat.update({ scores: scores }, {where: { user_id: user.id, tema_id: topic.tema_id } })
        } else {
            const stat = await Stat.findOne({ where: { user_id: user.id, tema_id: topic.tema_id }})
            scores = stat.scores - question.cost
            const updateStat = await Stat.update({ scores: scores }, {where: { user_id: user.id, tema_id: topic.tema_id } })
        }
        res.json(scores)

    } catch (err) {
        console.log(err);
    }
}

exports.scoreCheck = async (req, res) => {
    console.log('req', req.body)
    try {
        const { user } = req.session
        const score = await Stat.findOne({ where: { user_id: user.id, tema_id: req.body.id } })
        res.json(score.scores)
    } catch (error) {
        console.log(error)
    }
}