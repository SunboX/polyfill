// Object.defineProperties
Object.defineProperties = function (object, properties) {
	for (var property in properties) {
		Object.defineProperty(object, property, properties[property]);
	}

	return object;
};