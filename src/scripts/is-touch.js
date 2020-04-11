const isTouch = () => {
	return (('ontouchstart' in window)
		 || (navigator.MaxTouchPoints > 0)
		 || (navigator.msMaxTouchPoints > 0));
};

export default isTouch;