Object.defineProperty = function (object, property, descriptor) {
	object.__defineGetter__(property, descriptor.get);
	object.__defineSetter__(property, descriptor.set);
};