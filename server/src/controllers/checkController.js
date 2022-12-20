const { Stat, SuperTopic } = require('../../db/models');

exports.check = async (req, res) => {
    if(req.session.user) {
      const { user } = req.session
      const stat = await Stat.findAll({where: { user_id: user.id}, raw: true })
      let statistic = []
      const chto = stat.map( async (el) => {
        const tems = await SuperTopic.findOne({ where: { id: el.tema_id }})
        const tema = tems.tema
        const score = el.scores
        statistic.push({tema, score})
      })
      await Promise.all(chto)
      // console.log('--------', stat)
      return res.json({user, statistic})
    }
    return res.json('error')
  } 