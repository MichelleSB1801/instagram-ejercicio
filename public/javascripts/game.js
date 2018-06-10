$.ajax({
		url: "http://localhost:3000/",
	}).done(function(a){
	});


let index;

$('.like').on('click',function() {
  let that = $(this)
<<<<<<< HEAD
  let color = '.color'
  let clicked = $(this).data();
=======
>>>>>>> ee00c456dc756df09fe94f19b92b249d9745577c
	$.ajax({
   		method: "PUT",
   		url: 'http://localhost:3000/likes',
   		data: {
     		id: clicked.heart,
   		}
 	}).done(function(data) {
<<<<<<< HEAD
   that.siblings('.heart').html(data.like);
   console.log(data);
   if (that.hasClass('nocolor')) {
   		that.siblings(color).removeClass('hide');
   		that.addClass('hide');
   }
=======
>>>>>>> ee00c456dc756df09fe94f19b92b249d9745577c
    	console.log(that);
    	console.log(that.children());
 })

<<<<<<< HEAD
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
=======
>>>>>>> ee00c456dc756df09fe94f19b92b249d9745577c
})
