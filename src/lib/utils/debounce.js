function debounce(callback, time) {
	let interval;

	const debouncedFunction = (...args) => {
		clearTimeout(interval);
		debouncedFunction.isPending = true;

		interval = setTimeout(() => {
			debouncedFunction.isPending = false;
			interval = null;
			callback(...args);
		}, time);
	};

	debouncedFunction.cancel = () => {
		if (!debouncedFunction.isPending) return;

		debouncedFunction.isPending = false;
		clearTimeout(interval);
	};

	debouncedFunction.isPending = false;

	return debouncedFunction;
}

export default debounce;
