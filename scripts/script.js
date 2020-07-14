let sliderFunc = function () {
	let mainElement = document.querySelector(".slider"),
		sliderWrapper = mainElement.querySelector(".slider_wrapper"),
		sliderItems = mainElement.querySelectorAll(".slider_item"),
		sliderControlLeft = mainElement.querySelector(".slider_control_left"),
		sliderControlRight = mainElement.querySelector(".slider_control_right"),
		items = [];

	for (let i = 0; i < sliderItems.length; i++) {
		items.push(sliderItems[i]);
	};

	sliderControlRight.addEventListener("click", function() {
		sliderWrapper.appendChild(items[0]);
		items.push(items[0]);
		items.shift(items[0]);
	});

	sliderControlLeft.addEventListener("click", function() {
		sliderWrapper.insertBefore(items[items.length-1], items[0]);
		items.unshift(items[items.length-1]);
		items.pop(items[items.length-1]);
	});
};

sliderFunc();