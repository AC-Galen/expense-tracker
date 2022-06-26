module.exports = {
  authenticator: (req, res, next) => {
    if(req.isAuthenticated()) {
      return next()
    }
    req.flash('warning_msg', '請先登入才能查閱')
    res.redirect('/users/login')
  }
}