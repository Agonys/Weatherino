interface IDebounce<
	T extends (...args: any[]) => any
> {
	(...args: Parameters<T>): Promise<ReturnType<T>>;
	cancel: () => void;
}

function debounce<
	T extends (...args: any[]) => any
>(
	func: T,
	waitFor = 50,
): IDebounce<T> {
	let timeout: ReturnType<typeof setTimeout>;
	let isPending = false;
	let pendingPromise: Promise<ReturnType<T>> | null;

	const debouncedFunction: IDebounce<T> = (...args: Parameters<T>) => {
		clearTimeout(timeout);
		pendingPromise = null;

		isPending = true;
		pendingPromise = new Promise<ReturnType<T>>((resolve) => {
			timeout = setTimeout(() => {
				isPending = false;
				resolve(func(...args));
			}, waitFor);
		});

		return pendingPromise;
	}

	debouncedFunction.cancel = () => {
		if (isPending) {
			clearTimeout(timeout);
			isPending = false;
			pendingPromise = null;
		}
	}

	return debouncedFunction;
}

export default debounce;