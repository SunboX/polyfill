// shiv elements on the document
"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section subline summary time video".replace(/\w+/g, function (nodeName) {
	document.createElement(nodeName);
});
