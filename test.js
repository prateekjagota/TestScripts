#import "../TestScripts/tuneup_js/tuneup.js"



test("Tap Favourite", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().tap();
     window.tableViews()[0].cells()["Favourites"].tap();
     //Verify the element present
     target.delay(2);
     assertEquals("Activities", window.segmentedControls()[0].buttons()[0].name());
     });
