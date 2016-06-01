page('/', homeController.index);
page('/all-parks', parkDataController.index, clearArray);
page('/about', aboutController.index);
page('/park/:id', singleParkController.loadSinglePark, singleParkController.index);
page();
