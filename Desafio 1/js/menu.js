

var urlMenu = "https://challange.goomer.com.br/restaurants/";

$( document ).ready(function() {
	var urlLocal = window.location.href;
	var idRestaurant = urlLocal.split("=")[1];
	var groupmenuArray = [];
	$.ajax({
		type: 'GET',
		url: urlMenu + idRestaurant + "/menu",
		success: function(data) {
			$.each( data, function( key, value ) {
				var nameMenu = value.name;
				var imageMenu = value.image;
				var priceMenu = value.price;
				var groupMenu = value.group;
				/*
				if (groupmenuArray.includes(groupMenu.toLowerCase()) == false ) {
					groupmenuArray.push(groupMenu.toLowerCase());
				} 
				*/
				//alert(groupmenuArray)
				//alert(nameRestaurant);
				//alert(addressRestaurant);
				//console.log(imageRestaurant);
				//var htmlRestaurant = '<div class="restaurants"><a href="chooseRestaurant.html?id=' + value.id+ '"><img class="imgRestaurant" src="' + imageRestaurant +'" title="' + addressRestaurant + '"/><h4 class="text-center">' + nameRestaurant + '</h4></a></div>';
				
				//$("#listRestaurants").append(htmlRestaurant);			
			});
		}
	});
});