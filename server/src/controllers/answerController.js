const { Question, IsCorrect, Stat, Topic } = require("../../db/models")
const bcrypt = require('bcrypt');

exports.answerCheck = async (req, res) => {
    try {
        const { questionId, answer } = req.body;
        const user = req.session.user;
        const question = await Question.findOne({ where: { id: questionId } });
        console.log('question', question)
        const topic = await Topic.findOne({ where: { id: question.topic_id } })
        // console.log('question', question)
        
        let scores
        if (question.answer.toLowerCase() === answer.toLowerCase()) {
            const stat = await Stat.findOne({ where: { user_id: user.id, tema_id: topic.tema_id }})
            scores = stat.scores + question.cost
            console.log('scores', scores)
            const updateStat = await Stat.update({ scores: scores }, {where: { user_id: user.id, tema_id: topic.tema_id } })
        } else {
            const stat = await Stat.findOne({ where: { user_id: user.id, tema_id: topic.tema_id }})
            scores = stat.scores - question.cost
            console.log('scores', scores)
            const updateStat = await Stat.update({ scores: scores }, {where: { user_id: user.id, tema_id: topic.tema_id } })
        }
        res.json(scores)

    } catch (err) {
        console.log(err);
    }
}