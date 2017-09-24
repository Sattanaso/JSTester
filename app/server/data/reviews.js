module.exports = (mongo) => {
	const db = mongo.db;
	const mongojsObj = mongo.api;

	return {
		getReviews: () => {
			return new Promise((resolve, reject) => {
				db['reviews']
					.find({}, (err, reviews) => {
						if (err) {
							reject(err);
						}
						resolve(reviews);
					})
			});
		},
		geReviewById: (id) => {
			return new Promise((resolve, reject) => {
				db['reviews']
					.findAndModify({
						query: { _id: mongojsObj.ObjectId(id) },
						update: { $inc: { looks: 1 } },
						new: true
					}, (err, review) => {
						if (err) {
							reject(err);
						}
						resolve(review);
					})
			});
		},
		getReviewByTag: (tag) => {
			return new Promise((resolve, reject) => {
				db['reviews']
					.find({ tags: tag }, (err, review) => {
						if (err) {
							reject(err);
						}
						resolve(review);
					})
			});
		},
		postReview: (review) => {
			return new Promise((resolve, reject) => {
				db['reviews']
					.save(reviewg, (err, review) => {
						if (err) {
							reject(err);
						}
						resolve(review);
					})
			});
		},
		updateReview: (id, dataObj) => {
			let updated = { $push: dataObj }

			return new Promise((resolve, reject) => {

				db['reviews'].update({ _id: mongojsObj.ObjectId(id) }, updated, {},
					(err, obj) => {
						if (err) {
							reject(err);
						}
						resolve(obj);
					})
			});
		},
		updateComments: (id, comment) => {
			let updated = { $push: { comments: comment }, $inc: { commentsCount: 1 } }

			return new Promise((resolve, reject) => {

				db['reviews'].update({ _id: mongojsObj.ObjectId(id) }, updated, {},
					(err, obj) => {
						if (err) {
							reject(err);
						}
						resolve(obj);
					})
			});
		}
	}
}