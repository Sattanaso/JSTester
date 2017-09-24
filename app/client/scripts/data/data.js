const data = (() => {
	class Data {
		constructor(requester) {
			this.requester = requester;
		}

		getStatics() {
			return this.requester.get('./static.json');
		}

	}

	const dataObj = new Data(ajaxRequester);
	return dataObj;
})();