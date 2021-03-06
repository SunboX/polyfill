// EventListener.js | MIT License | github.com/jonathantneal/EventListener
(function () {
	// add
	function addEventListener(type, listener) {
		var target = this;

		registry.unshift({
			__listener: function (event) {
				event.currentTarget = target;
				event.pageX = event.clientX + document.documentElement.scrollLeft;
				event.pageY = event.clientY + document.documentElement.scrollTop;
				event.preventDefault = function () { event.returnValue = false };
				event.relatedTarget = event.fromElement || null;
				event.stopPropagation = function () { event.cancelBubble = true };
				event.relatedTarget = event.fromElement || null;
				event.target = event.srcElement || target;
				event.timeStamp = +new Date;

				listener.call(target, event);
			},
			listener: listener,
			target: target,
			type: type
		});

		target.attachEvent("on" + type, registry[0].__listener);
	}

	// remove
	function removeEventListener(type, listener) {
		for (var index = 0, length = registry.length; index < length; ++index) {
			if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
				return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
			}
		}
	}

	// dispatch
	function dispatchEvent(eventObject) {
		try {
			return this.fireEvent("on" + eventObject.type, eventObject);
		} catch (error) {
			for (var items = [].concat.call([], registry), index = 0, length = items.length; index < length; ++index) {
				if (items[index].target == this && items[index].type == eventObject.type) {
					items[index].__listener.call(this, eventObject);
				}
			}
		}
	}

	var registry = [], propertyDescriptors = {
		addEventListener: {
			value: addEventListener
		},
		removeEventListener: {
			value: removeEventListener
		},
		dispatchEvent: {
			value: dispatchEvent
		}
	};

	Object.defineProperties(Window.prototype, propertyDescriptors);
	Object.defineProperties(HTMLDocument.prototype, propertyDescriptors);
	Object.defineProperties(Element.prototype, propertyDescriptors);

	// custom
	Object.defineProperty(Window.prototype, "CustomEvent", {
		get: function () {
			var self = this;

			return function CustomEvent(type, canBubble, cancelable, detail) {
				var event = self.document.createEventObject(), key;

				event.type = type;
				event.returnValue = !cancelable;
				event.cancelBubble = !canBubble;

				for (key in detail) {
					event[key] = detail[key];
				}

				return event;
			};
		}
	});

	// ready
	document.addEventListener("readystatechange", function (event) {
		if (document.readyState == "complete") {
			document.dispatchEvent(new CustomEvent("DOMContentLoaded", false, false));
		}
	});
})();
