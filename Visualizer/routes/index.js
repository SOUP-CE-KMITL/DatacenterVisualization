// convenience wrapper around all other files:
module.exports = function(passport) {
	return {
		auth: require('./auth')(passport),
		page: require('./page'),
		api: require('./api')
	};
};
