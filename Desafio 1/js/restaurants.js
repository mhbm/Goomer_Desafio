

var urlRestaurant = "https://challange.goomer.com.br/restaurants";

$( document ).ready(function() {

	$.ajax({
		type: 'GET',
		url: urlRestaurant,
		success: function(data) {
			$.each( data, function( key, value ) {
				var nameRestaurant = value.name;
				var addressRestaurant = value.address;
				var imageRestaurant = value.image;
				var idRestaurant = value.id;
				//alert(nameRestaurant);
				//alert(addressRestaurant);
				//console.log(imageRestaurant);
				var htmlRestaurant = '<div class="restaurants"><a href="chooseRestaurant.html?id=' + idRestaurant + '&name='+ nameRestaurant+'"><img class="imgRestaurant" src="' + imageRestaurant +'" title="' + addressRestaurant + '"/><h4 class="text-center">' + nameRestaurant + '</h4></a></div>';
				
				$("#listRestaurants").append(htmlRestaurant);			
			});
		}
	});
});