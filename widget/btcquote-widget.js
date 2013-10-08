var BTCQuote = function () {
	var self = this;

	var BITCOIN_LOGO = "data:image/jpeg;base64,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";
	var BACKGROUND_GRADIENT = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA8KCgsLCw8MDA8WDw0PFhkTDw8TGR4XFxcXFx4eFxoaGhoXHh0iIyQjIh0sLC8vLCw7Ojo6Ozs7Ozs7Ozs7Ozv/2wBDARAPDxESERYSEhYXEhQSFx0YGBgYHScdHR0dHScuJCAgICAkLiotJycnLSozMy4uMzM7Ozo7Ozs7Ozs7Ozs7Ozv/wgARCABGAAEDAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIG/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB0IJJJJAB/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQABBQIf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAFxAAAwEAAAAAAAAAAAAAAAAAABARIP/aAAgBAQABPyFUpc//2gAMAwEAAgADAAAAEIIBJJ//xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/EB//xAAWEAADAAAAAAAAAAAAAAAAAAAAETD/2gAIAQEAAT8QHAf/2Q==";

	self._template = [
		'<div style="background-color: #DEDEDE; width: 210px; height: 70px; background-image: url(' + BACKGROUND_GRADIENT + '); line-height: 1; font-family: Arial; border-radius: 4px; border: 1px solid #D6D4D7;">',
			'<div style="background-image: url(' + BITCOIN_LOGO + '); width: 56px; height: 56px; float: left; margin: 8px 0px 8px 8px;"></div>',
			'<span style="color: #4B4B4B; font-weight: bold; font-size: 30px; float: right; margin: 8px 8px 0px 0px; height: 30px">{{last}}</span><br />',
			'<span style="float: right; padding-right: 8px; height: 14px;">',
				'<span style="color: #999; font-size: 10px; float: left;">Bid: <b>{{bid}}</b></span>',
				'<span style="color: #999; font-size: 10px; float: left; margin-left: 6px;">Ask: <b>{{ask}}</b></span><br />',
			'</span>',
			'<span style="float: right; font-size: 10px; color: #666; padding-right: 7px;">',
				'Powered by <a href="http://www.btcquote.com" target="_blank" style="color: #666;">BTCQuote.com</a>',
			'</span>',
		'</div>'
	].join('');
	self._dataNames = ['last', 'bid', 'ask'];
	self._data = {};

	self.initialize = function () {
		self.widget = document.getElementById("btc-quote");

		if (self.widget == null) {
			throw Exception('Please include a tag with the ID "btc-quote"');
			return;
		}

		self.BTCRef = new Firebase("https://publicdata-bitcoin.firebaseio.com/");
		self.BTCRef.child("last").on("value", self.receiveBTCData);
		self.BTCRef.child("bid").on("value", self.receiveBTCData);
		self.BTCRef.child("ask").on("value", self.receiveBTCData);
	};

	self.addScript = function (src, callback) {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = src;
		script.onload = function () {
			callback(src);
		};
		head.appendChild(script);
	}

	self.receiveBTCData = function (snapshot) {
		var name = snapshot.name();
		var value = parseFloat(snapshot.val());
		self.updateData(name, value);
		self.updateWidget();
	}

	self.updateData = function (name, value) {
		self._data[name] = value;
	}

	self.updateWidget = function () {
		var rendered = self._template;

		for (var nameIndex in self._dataNames) {
			var name = self._dataNames[nameIndex];
			var value = self._data[name]? self._data[name]:"";
			rendered = rendered.replace(new RegExp("{{" + name.toString() + "}}"), value);
		}

		self.widget.innerHTML = rendered;
	}

	this.addScript('https://cdn.firebase.com/v0/firebase.js', this.initialize);
};

var bq = new BTCQuote();