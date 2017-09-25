const mainServicel = (() => {
	class MainService {
		constructor() {
		}

		getHome() {
			return view.home('#content', {})
		}
	}

	let newCtrl = new MainService();
	return newCtrl
})()