page('/', homeController.index);
page('/all-parks', parkDataController.index);
page('/about', aboutController.index);
page('/park/:name', singleParkController.loadSinglePark, singleParkController.index);
page();
