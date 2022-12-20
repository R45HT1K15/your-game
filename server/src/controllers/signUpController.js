const { User, Topic, IsCorrect, Question } = require("../../db/models");
const bcrypt = require('bcrypt');

const postSignUp = async (req, res) => {
    const { name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const questions = await Question.findAll()
        const user = await User.create({ name, password: hashedPassword });
        const aaa = questions.map( async (question) => {
            const isCorrect = await IsCorrect.create({ user_id: user.id, question_id: question.id, status: true, tema: question.topic_id.toString() })
        })
        await Promise.all(aaa)
        req.session.user = { id: user.id, name: user.name}
        req.session.save(() => {
            res.json(req.session.user)
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { postSignUp }