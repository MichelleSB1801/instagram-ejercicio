let self = {}



var imagenes = [
	{
		id: 'i1',
		nombre: 'Foto1',
		foto: 'https://images.pexels.com/photos/928475/pexels-photo-928475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		likes: 0,
	},
	{
		id: 'i2',
		nombre: 'Foto2',
		foto: 'https://images.pexels.com/photos/928475/pexels-photo-928475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		likes: 0,
	},
	{
		id: 'i3',
		nombre: 'Foto3',
		foto: 'https://images.pexels.com/photos/928475/pexels-photo-928475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		likes: 0,
	}]	



self.postear = function (req, res){
  res.render('index',
  	{
  		posteo: imagenes,
  	});
};


self.like = function (req, res) { //cuando es un array de objetos siempre tiene que hacerse un for
	console.log('asd')
	for (var i = 0; i < imagenes.length; i++) {
		console.log('asd0', req.body)
		if (req.body.id == imagenes[i].id) {
			console.log('asd2')
			imagenes[i].likes ++
			console.log('asd3')
			res.json({
				likes: imagenes[i].likes
			})
		}
	}
}




module.exports = self