let self = {}
const postsService = require('../services/postsService')


self.postear = function (req, res){
  res.render('index',
  	{
  		posteo: postsService.getImages(),
  	});
};


self.like = function (req, res) { 
	const likes = postsService.likes(req.body);
	res.json({ like: likes });

}




self.dynamic = function(req, res){
	console.log(req.params.id)
}

module.exports = self