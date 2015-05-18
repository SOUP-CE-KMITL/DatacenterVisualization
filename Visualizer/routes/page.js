/*
 * GET home page.
 */

exports.vis = function(req, res) {
	res.render('vis.ejs', { user: req.user });
};

exports.test = function(req, res){
	res.render('test.ejs', { user: req.user });
};

exports.test_t = function(req, res){
	res.render('test_t.ejs', { user: req.user });
};

exports.newUI = function(req, res) {
	res.render('index.ejs', { user: req.user });
};
