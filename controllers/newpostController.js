let self = {}
const postsService = require('../services/postsService')


self.vista = function (req, res) {
	 res.render('newpost');
};



self.newpost = function(req, res){
	console.log(req.body);
	let nuevopost = postsService.upload(req.body);
	res.json({npost: nuevopost});
} 





//css-grid
//masonry






module.exports = self