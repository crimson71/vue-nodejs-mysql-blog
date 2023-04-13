const guard = (req,res,next) => {
  //不是访问登陆页面且示登陆，重定向至登陆页面
  if(req.url !== '/login' && !req.session.username) {
    res.redirect('/admin/login')
  }else {
    next()
  }
}
module.exports = guard