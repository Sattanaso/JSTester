const view = (() => {
	class View {
		constructor(templateLoader) {
			this.pathString = '';
			this.templatesPath = '../../ui/templates/';
			this.templateLoader = templateLoader;
		}

		header(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'layout/header.html', data);
		}

		footer(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'layout/footer.html', data);
		}

		main(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'layout/main.html', data);
		}

		location(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'sub-content/location.html', data);
		}

		awards(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'sub-content/awards.html', data);
		}

		contact(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'sub-content/contact.html', data);
		}

		hours(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'sub-content/hours.html', data);
		}

		reviews(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'sub-content/reviews.html', data);
		}
	}

	const viewObj = new View(templateLoader);
	return viewObj;
})();