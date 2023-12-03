var products = document.getElementsByClassName('product');

for (var i = 0; i < products.length; i++) {
	products[i].addEventListener('click', function() {
		var productId = this.id;
		var interactiveWindow = document.createElement('div');
		interactiveWindow.classList.add('interactive-window');

		var windowContent = document.createElement('div');
		windowContent.classList.add('window-content');

		var closeButton = document.createElement('span');
		closeButton.innerHTML = '&times;';
		closeButton.classList.add('close-button');
		closeButton.addEventListener('click', function() {
			interactiveWindow.remove();
		});

		var productImage = document.createElement('img');
		productImage.src = document.getElementById(productId).querySelector('img').src;
		var productName = document.createElement('h2');
		productName.innerHTML = document.getElementById(productId).querySelector('h2').innerHTML;
		var productDescription = document.createElement('p');
		productDescription.innerHTML = document.getElementById(productId).querySelector('p').innerHTML;

		

		windowContent.appendChild(closeButton);
		windowContent.appendChild(productName);
		windowContent.appendChild(productImage);
		windowContent.appendChild(productDescription);
		interactiveWindow.appendChild(windowContent);

		document.body.appendChild(interactiveWindow);
	});
}

var currentBackgroundImageUrlIndex = 0;

setInterval(function() {
	document.body.style.backgroundImage = 'url(' + backgroundImageUrls[currentBackgroundImageUrlIndex] + ')';
	currentBackgroundImageUrlIndex++;
	if (currentBackgroundImageUrlIndex >= backgroundImageUrls.length) {
		currentBackgroundImageUrlIndex = 0;
	}
}, 5000);
