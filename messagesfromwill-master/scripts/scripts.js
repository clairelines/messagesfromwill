function createMessage() {
	handleSubmit();
}

function handleSubmit() {
	var messageString = $('#message').val().toUpperCase();
	var messageArray = messageString.split("");
	orderImages(messageArray);
}


function orderImages(messageArray) {
	var imagesArray = [];
	var allowedChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	//Loading
	$('#activeImg').attr("src", "http://messagesfromwill.com/images/letters/flashing.gif");
	//Create a new array with the correct images to show in order
	$.each(messageArray, function(index, value) {
		if ($.inArray(value, allowedChars) > -1 ) {
			imagesArray.push("http://messagesfromwill.com/images/letters/letter-None.jpg");
			imagesArray.push("http://messagesfromwill.com/images/letters/letter-" + value + ".jpg");
		}
	});
	imagesArray.push("http://messagesfromwill.com/images/letters/letter-ALL.jpg");
	imagesArray.push("http://messagesfromwill.com/images/letters/letter-None.jpg");
	imagesArray.push("http://messagesfromwill.com/images/letters/letter-ALL.jpg");
	createGIF(imagesArray);
}


function createGIF(imagesArray) {
	gifshot.createGIF({
		images: imagesArray,
		interval: .5,
		gifWidth: 671.5,
		gifHeight: 402.5
	},function(obj) {
		if(!obj.error) {
			var image = obj.image,
			animatedImage = document.createElement('img');
			animatedImage.src = image;
			$('#output').empty();
			$('#output').append(animatedImage);
		}
	});
}