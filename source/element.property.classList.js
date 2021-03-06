Object.defineProperty(Element.prototype, "classList", {
	configurable: true,
	get: function () {
		var
		join = [].join,
		push = [].push,
		splice = [].splice,
		node = this,
		list = new function DOMTokenList() {
			var list = this, index;

			list.contains = function (value) {
				var length = list.length;

				index = -1;

				splice.apply(list, [0, length].concat((node.getAttribute("class") || "").split(/\s+/)));

				while (++index < length) if (list[index] == value) break;

				return index < length;
			};

			list.add = function (value) {
				if (!list.contains(value)) push.call(list, String(value));

				node.setAttribute("class", join.call(list, " "));
			};

			list.remove = function (value) {
				if (list.contains(value)) splice.call(list, index, 1);

				node.setAttribute("class", join.call(list, " "));
			};

			list.toggle = function (value) {
				list.contains(value) ? splice.apply(list, [index, 1]) : push.call(list, String(value));

				node.setAttribute("class", join.call(list, " "));
			};

			list.contains("");
		};

		return Object.defineProperties(node, {
			className: {
				configurable: true,
				get: function () {
					return join.call(list, " ");
				},
				set: function (value) {
					this.setAttribute("class", value);

					list.contains("");
				}
			},
			classList: {
				configurable: true,
				get: function () {
					return list;
				}
			}
		}).classList;
	}
});