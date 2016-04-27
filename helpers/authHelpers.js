const knex = require('../db/knex');

module.exports = {
	ensureAuthenticated:(req,res,next)=>{
		if (req.user) {
			return next();
		} else {
			req.flash('message', 'Please login');
			req.redirect('/users/login')
		}
	}
};