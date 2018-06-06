$.ajax({
		url: "http://localhost:3000/",
	}).done(function(a){
	});


let index;

$('.like').on('click',function() {
  let that = $(this)
  //console.log('aaaaaaaaaaa')
  	console.log('soy', this);
  //console.log(something)
  let clicked = $(this).data();
  //console.log(clicked.awesome);
	$.ajax({
   		method: "PUT",
   		url: 'http://localhost:3000/likes',
   		data: {
     		id: clicked.heart,
   		}
 	}).done(function(data) {
  // console.log(data, index);
   that.siblings('.heart').html(data.likes);
    	console.log(that);
    	console.log(that.children());
 })


/*$('.imgcontainer').on('click', function () {
	var cora = $('.heart').data('heart')
	let that = $(this)

	console.log('hola',)
	$.ajax({
		method: 'PUT',
		url: "http://localhost:3000/likes", //en los PUT debe ser siempre diferente del GET
		data: {
			id: cora //en los objetos el ultimo no lleva coma
		}
	}).done(function(a){ //a va a ser lo que estes mandando en el res.json
		console.log(index)
		console.log($('.heart'))
		that.children($('.heart')).html(a.likes)

	})*/
})
