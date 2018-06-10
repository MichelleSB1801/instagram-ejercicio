$.ajax({
		url: "http://localhost:3000/",
	}).done(function(a){
	});


let index;

$('.like').on('click',function() {
  let that = $(this)
  let color = '.color'
  let clicked = $(this).data();
	$.ajax({
   		method: "PUT",
   		url: 'http://localhost:3000/likes',
   		data: {
     		id: clicked.heart,
   		}
 	}).done(function(data) {
   that.siblings('.heart').html(data.like);
   console.log(data);
   if (that.hasClass('nocolor')) {
   		that.siblings(color).removeClass('hide');
   		that.addClass('hide');
   }
    	console.log(that);
    	console.log(that.children());
 })

})



$('.upload').on('click', function(){
  const img = $('.img').val();
  const titulo = $('.titulo').val();
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/newpost',
    data: {
      url: img,
      title: titulo,
    }
  });
})
