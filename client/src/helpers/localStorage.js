export const setItem = (key, value) => {
	if (!window) {
		return;
	}

	window.localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
	if (!window || !window.localStorage.getItem(key)) {
		return null;
	}

	return JSON.parse(localStorage.getItem(key));
};
