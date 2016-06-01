page('/', homeController.index);
page('/all-parks', parkDataController.index);
page('/closest-parks', nearestParksController.index);
page('/about', aboutController.index);
page('/park/:siteUrl', singleParkController.loadSinglePark, singleParkController.index);
page();
