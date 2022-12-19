const { Question } = require("../../db/models")
const bcrypt = require('bcrypt');

exports.answerCheck = async (req, res) => {
    console.log('----------------', req.body)
    try {
        const questions = await Question.findOne({ where: { id: req.body.questionId}});
        console.log('questions', questions)
    } catch (err) {
     console.log(err);
    }
}