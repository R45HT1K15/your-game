const { Question, IsCorrect } = require("../../db/models")
const bcrypt = require('bcrypt');

exports.answerCheck = async (req, res) => {
    try {
        const { questionId, answer } = req.body;
        const user = req.session.user;
        const question = await Question.findOne({ where: { id: questionId }});
        console.log('question', question)
        if(question.answer.trim().toLowerCase() === answer.trim().toLowerCase()) {
            const correctAnswer = await IsCorrect.findOrCreate({ where: { user_id: user.id, question_id: question.id, status: true}})
            res.json(correctAnswer)
        } else {
            const correctAnswer = await IsCorrect.findOrCreate({ where: { user_id: user.id, question_id: question.id, status: false}})
            res.json(correctAnswer)
        }
    } catch (err) {
     console.log(err);
    }
}