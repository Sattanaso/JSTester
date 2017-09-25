const view = (() => {
	class View {
		constructor(templateLoader) {
			this.pathString = '';
			this.templatesPath = '../../ui/components/';
			this.templateLoader = templateLoader;
		}

		header(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'common/header/header.html', data);
		}

		footer(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'common/footer/footer.html', data);
		}

		main(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'common/main/main.html', data);
		}

		location(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'location/location.html', data);
		}

		awards(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'awards/awards.html', data);
		}

		contact(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'contact/contact.html', data);
		}

		menu(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'menu/menu.html', data);
		}

		reviews(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'reviews/reviews.html', data);
		}
	}

	const viewObj = new View(templateLoader);
	return viewObj;
})();