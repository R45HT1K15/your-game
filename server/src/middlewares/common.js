const isAdmin = (req, res, next) => {
  if (req.session.newUser?.email === "admin@gmail.com") {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = { isAdmin };
