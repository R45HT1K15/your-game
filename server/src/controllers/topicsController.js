const renderTemplate = require('../lib/renderReactModel');
const TopicV = require('../views/Topic');
const { Topic } = require('../../db/models');

const renderTopic = async (req, res) => {
    try {
        const { user } = req.session;
        const topic = await Topic.findAll({ where: { tema_id: req.params.id } });
        renderTemplate(TopicV, { user, topic }, res);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { renderTopic };