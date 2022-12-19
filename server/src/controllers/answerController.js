const { Question, IsCorrect } = require("../../db/models")
const bcrypt = require('bcrypt');

exports.answerCheck = async (req, res) => {
    try {
        const { questionId, answer } = req.body;
        const user = req.session.user;
        const question = await Question.findOne({ where: { id: questionId } });
        console.log('question', question)
        const datat = 1;
        if (question.answer.trim().toLowerCase() === answer.trim().toLowerCase()) {

            const correctAnswer = await IsCorrect.findOrCreate({
                where: { user_id: user.id, question_id: questionId }, defaults: {
                    status: true
                }
            })

            if (correctAnswer) {
                const correctAnswer2 = await IsCorrect.update({ status: true }, {
                    where: {
                        user_id: user.id, question_id: questionId
                    }
                });
            }

        } else {
            const wrongAnswer = await IsCorrect.findOrCreate({
                where: { user_id: user.id, question_id: questionId }, defaults: {
                    status: false
                }
            })

            if (wrongAnswer) {
                const wrongAnswer2 = await IsCorrect.update({ status: false }, {
                    where: {
                        user_id: user.id, question_id: questionId
                    }
                });
            }
            
        }
        res.json(datat)

    } catch (err) {
        console.log(err);
    }
}