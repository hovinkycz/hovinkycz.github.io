
(function () {
	'use strict';

	if (window.twttr && twttr.widgets) {
		twttr.widgets.load().then(init);
	}

	function init() {
		var embeds;
		embeds = document.querySelectorAll('iframe.twitter-tweet-rendered');
		for (var i = 0, count = embeds.length; i < count; i++) {
			// the iframe does not have its content layout ready yet :(
			setTimeout(initEmbed.bind(null, embeds[i]), 250);
		}
	}

	function initEmbed(embed) {
		var embedContentRoot = embed.contentDocument.documentElement;
		embed.style.height = embedContentRoot.scrollHeight + 'px';
	}
}());
