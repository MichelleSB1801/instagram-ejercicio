let self = {}
<<<<<<< HEAD
const postsService = require('../services/postsService')
=======
>>>>>>> ee00c456dc756df09fe94f19b92b249d9745577c


self.postear = function (req, res){
  res.render('index',
  	{
<<<<<<< HEAD
  		posteo: postsService.getImages(),
=======
>>>>>>> ee00c456dc756df09fe94f19b92b249d9745577c
  	});
};


<<<<<<< HEAD
self.like = function (req, res) { 
	const likes = postsService.likes(req.body);
	res.json({ like: likes });

=======
>>>>>>> ee00c456dc756df09fe94f19b92b249d9745577c
}




<<<<<<< HEAD
self.dynamic = function(req, res){
	console.log(req.params.id)
}

=======
>>>>>>> ee00c456dc756df09fe94f19b92b249d9745577c
module.exports = self