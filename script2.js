const products = document.querySelectorAll('.product');

products.forEach((product) => {
	product.addEventListener('click', () => {
		const productId = product.id;
		const description = product.dataset.description;
		const interactiveWindow = document.createElement('div');
		interactiveWindow.classList.add('interactive-window');

		const windowContent = document.createElement('div');
		windowContent.classList.add('window-content');

		const closeButton = document.createElement('span');
		closeButton.innerHTML = '&times;';
		closeButton.classList.add('close-button');
		closeButton.addEventListener('click', () => {
			interactiveWindow.remove();
		});

		const productName = document.createElement('h2');
		productName.innerHTML = product.querySelector('2innerHTML');

		const productImage = document.createElement('img');
		productImage.src = product.querySelector('img').src;
		productImage.alt = productName.innerHTML;

		const productDescription = document.createElement('p');
		productDescription.innerHTML = description;

		windowContent.appendChild(closeButton);
		windowContent.appendChild(productName);
		windowContent.appendChild(productImage);
		windowContent.appendChild(productDescription);
		interactiveWindow.appendChild(windowContent);

		document.body.appendChild(interactiveWindow);
	});
});



let currentBackgroundImageUrlIndex = 1;

setInterval()
	document.body.style.backgroundImage = `url(${backgroundImageUrls[currentBackgroundImageUrlIndex]})`;
	currentBackgroundImageUrlIndex++;
	if (currentBackgroundImageUrlIndex >= backgroundImageUrls.length) 
	{currentBackgroundImageUrlIndex = 1 ;} 500;