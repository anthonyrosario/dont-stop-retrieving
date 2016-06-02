page('/', homeController.index);
page('/all-parks', parkDataController.index);
page('/closest-parks', nearestParksController.index);
page('/about', aboutController.index);
page('/park/:id', singleParkController.loadSinglePark, Review.getSingleParkReviews, singleParkController.index, reviewController.index);
page();
