const router = {
	init: (() => {
		const appRouter = new Navigo(null, true);
		appRouter
			.on({
				'/home': () => {
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