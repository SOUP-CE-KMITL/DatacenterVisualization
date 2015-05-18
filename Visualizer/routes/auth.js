module.exports = function(passport) {
	return {
		login: function(req, res){
			res.render('login.ejs', { user: req.user, message: req.flash('error')});
		},

		authen:
			passport.authenticate('local', {successRedirect: '/vis', failureRedirect: '/login', failureFlash: "Username or password is incorrect." })
		,

		logout: function(req, res){
			req.logout();
			res.redirect('/login');
		}
	};
};
