page('/', homeController.index);
page('/all-parks', clearArray, parkDataController.index);
page('/about', aboutController.index);
page('/park/:id', singleParkController.loadSinglePark, singleParkController.index);
page();
