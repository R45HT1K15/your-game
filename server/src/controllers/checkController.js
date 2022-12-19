exports.check = (req, res) => {
    if(req.session.user) {
      return res.json(req.session.user)
    }
    return res.json('error')
  }