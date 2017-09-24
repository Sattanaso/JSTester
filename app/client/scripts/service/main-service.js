const mainServicel = (() => {
	class MainService {
		constructor() {
		}

		getHome() {
			view.home('#content', {})
		}
	}

	let newCtrl = new MainService();
	return newCtrl
})()