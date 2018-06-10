let self = {}



var imagenes = [
	{
		id: 'i1',
		title: "Where's my hotdog?",
		foto: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/01/spider-gwen-quien-es-que-mola-tanto-esta-otra-gwen-stacy.jpg?itok=o-sAVlSS',
		likes: 0,
	},
	{
		id: 'i2',
		title: 'Black or White?',
		foto: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2014/10/Spider-Gwen-1-Cover-Robbi-Rodriguez-720x1112.jpg',
		likes: 0,
	},
	{
		id: 'i3',
		title: 'Fight me.',
		foto: 'https://img.purch.com/o/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8xMzYvODkwL2kwMi9TcGlkZXItR3dlbi1sZWFkLmpwZw==',
		likes: 0,
	}]	


self.getImages = function() {
  return imagenes
}



self.likes = function(body){
	for (var i = 0; i < imagenes.length; i++) { //cuando es un array de objetos siempre tiene que hacerse un for
		if (body.id == imagenes[i].id) {
			imagenes[i].likes ++
			var like = imagenes[i].likes

			return like
		}
	}
}


self.upload = function(data) {
  const nuevopost = {
    foto: data.url,
    title: data.title,
    likes: 0,
    id: getId()
  }
  imagenes.push(nuevopost)
}

function getId() {
  const length = imagenes.length
  const newId = imagenes[length - 1].id + 1

  return newId
}


module.exports = self