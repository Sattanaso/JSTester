const router = {
	init: (() => {
		const appRouter = new Navigo(null, true);
		appRouter
			.on({
				'/home': () => {
					view.main('#main', {});
				},
				'/reviews': () => {
					view.reviews('#main', {});
				},
				'/location': () => {
					view.location('#main', {});
				},
				'/contact': () => {
					view.main('#main', {});
				},
				'/menu': () => {
					view.menu('#main', {});
				},
				'/awards': () => {
					view.awards('#main', {});
				},
				'/hours': () => {
				},
				'*': () => {
					appRouter.navigate('/home');
				}
			})
			.notFound(() => {
				alert('Error! Router not found!');
			})
			.resolve();
	})()
}