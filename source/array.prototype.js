// array prototype methods
(function () {
	ArrayPrototype = Array.prototype;
	HasOwnProperty = Object.prototype.hasOwnProperty;

	ArrayLoopString = String(function(){
		for (var arrayB = new Array, array = this, length = array.length, index = index < 0 ? length - index : index || 0, indexB = -1; index < length; ++index) {
			if (HasOwnProperty.call(array, index)) {
				/**/
			}
		}
	}).slice(12, -1).split(/\/\*\*\//);

	ArrayPrototype.every = new Function("callback", "scope", ArrayLoopString.join("if (!callback.call(scope || window, array[index], index, array)) return false") + "return true");
	ArrayPrototype.every.enumerable = false;

	ArrayPrototype.filter = new Function("callback", "scope", ArrayLoopString.join("if (callback.call(scope || window, array[index], index, array)) arrayB.push(array[index])") + "return arrayB");
	ArrayPrototype.filter.enumerable = false;

	ArrayPrototype.forEach = new Function("callback", "scope", ArrayLoopString.join("callback.call(scope || window, array[index], index, array)") + "return indexB");
	ArrayPrototype.forEach.enumerable = false;

	ArrayPrototype.indexOf = new Function("element", "index", ArrayLoopString.join("if (array[index] == element) return index") + "return indexB");
	ArrayPrototype.indexOf.enumerable = false;

	ArrayPrototype.lastIndexOf = new Function("element", "index", ArrayLoopString.join("if (array[index] == element) indexB = index") + "return indexB");
	ArrayPrototype.lastIndexOf.enumerable = false;

	ArrayPrototype.map = new Function("callback", "scope", ArrayLoopString.join("arrayB.push(callback.call(scope || window, array[index], index, array))") + "return arrayB");
	ArrayPrototype.map.enumerable = false;

	ArrayPrototype.some = new Function("callback", "scope", ArrayLoopString.join("if (callback.call(scope || window, array[index], index, array)) return true") + "return false");
	ArrayPrototype.some.enumerable = false;
})();