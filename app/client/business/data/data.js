const data = (() => {
	class Data {
		constructor(requester) {
			this.requester = requester;
		}

	}

	const dataObj = new Data(ajaxRequester);
	return dataObj;
})();