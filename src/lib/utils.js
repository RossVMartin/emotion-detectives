export function debounce(func, delay) {
	let debounceTimer; // Timer shared across all calls to this debounced function
	return function () {
		const context = this; // Capture the context
		const args = arguments; // Capture any provided arguments
		clearTimeout(debounceTimer); // Clear any existing timer
		debounceTimer = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	};
}

export function makeArray(length, fillFn) {
	return Array.from({ length }, fillFn);
}

export function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
