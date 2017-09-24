const view = (() => {
	class View {
		constructor(templateLoader) {
			this.templatesPath = '../../ui/';
			this.templateLoader = templateLoader;
		}

		header(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'common/header/header.html', data);
		}

		main(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'common/main/main.html', data);
		}

		home(selectorId, data) {
			this.templateLoader.load(selectorId, this.templatesPath + 'home/home.html', data);
		}
	}

	const viewObj = new View(templateLoader);
	return viewObj;
})();