

var urlMenu = "https://challange.goomer.com.br/restaurants/";

$( document ).ready(function() {
	var urlLocal = window.location.href;
	var idRestaurant = urlLocal.split("=")[1].split("&")[0];
	var nameRestaurant = decodeURI(urlLocal.split("=")[2]);
	$("#nameRestaurant").text(nameRestaurant);
	var groupmenuArray = [];
	$.ajax({
		type: 'GET',
		url: urlMenu + idRestaurant + "/menu",
		success: function(data) {
			var htmlRestaurant = "<div class=row>";
			$.each( data, function( key, value ) {
				var nameMenu = value.name;
				var imageMenu = value.image ? value.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
				var priceMenu = value.price ? value.price : "Indefinido";
				var groupMenu = value.group;
				if (key + 1 % 3 == 0 && key != 0) {
					htmlRestaurant += '</div><div class="row">';
				}
				htmlRestaurant += '<div class="col-md-4"><img class="imgMenu" src="' + imageMenu +'" title="' + groupMenu + '"/><p class="text-center">' + nameMenu + ' :: Preço R$ ' +priceMenu + '</p></a></div>';
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
				
							
			});
			htmlRestaurant += "</div";
			$("#listMenu").append(htmlRestaurant);
		}
	});
});