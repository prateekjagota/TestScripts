#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"

//Script will execute on start of automation suite, to verify basic navigation flow.

test("Navigation Flow", function(target, app) {
     var window = app.mainWindow();
     //Testing Favourite Screen
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Favourites"].vtap();
     assertEquals("Favourites", window.navigationBar().name());
     assertEquals("Activities", window.segmentedControls()[0].buttons()[0].name());
     assertEquals("Devices & Areas", window.segmentedControls()[0].buttons()[1].name());
     window.segmentedControls()[0].buttons()["Activities"].vtap();
     window.segmentedControls()[0].buttons()["Devices & Areas"].vtap();
     //Favourite screen navigation complete
     
     //Testing Events Screen
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Events"].vtap();
     assertEquals("Events", window.navigationBar().name());
     assertEquals("ALL", window.segmentedControls()[0].buttons()[0].name());
     assertEquals("LIGHT COLOR", window.segmentedControls()[0].buttons()[1].name());
     assertEquals("LIGHT POWER", window.segmentedControls()[0].buttons()[2].name());
     assertEquals("HEATING", window.segmentedControls()[0].buttons()[3].name());
     window.segmentedControls()[0].buttons()["ALL"].vtap();
     window.segmentedControls()[0].buttons()["LIGHT COLOR"].vtap();
     window.segmentedControls()[0].buttons()["LIGHT POWER"].vtap();
     window.segmentedControls()[0].buttons()["HEATING"].vtap();
     window.toolbar().buttons()["Add"].vtap();
     target.frontMostApp().actionSheet().collectionViews()[0].cells()["Cancel"].buttons()["Cancel"].vtap();
     
     //Testing Areas Screen
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Areas"].vtap();
     assertEquals("Areas", window.navigationBar().name());
     assertTrue(window.navigationBar().buttons()["Search"].checkIsValid(), "Search bar exists");
     window.navigationBar().buttons()["Search"].vtap();
     window.buttons()["Cancel"].vtap();
     target.frontMostApp().toolbar().buttons()["ADD"].vtap();
     target.frontMostApp().navigationBar().leftButton().vtap();
     

     
     //Testting CSRmesh devices screen
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["CSRmesh devices"].vtap();
     assertEquals("CSRmesh Devices", window.navigationBar().name());
     assertTrue(window.tableViews()[2].searchBars()[0].checkIsValid(), "Search bar exists");
     window.tableViews()[2].searchBars()[0].vtap();
     window.buttons()["Cancel"].vtap();
     

     
     //Testing Controllers screen
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Controllers"].vtap();
     assertEquals("Controllers", window.navigationBar().name());
     window.toolbar().buttons()["Add"].vtap();
     window.navigationBar().leftButton().vtap();
     
     
     //Testing Users screen
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Users"].vtap();
     assertEquals("Users", window.navigationBar().name());
     
     
     //Testing Import place screen
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Import place"].vtap();
     assertEquals("Export/Import Database", window.navigationBar().name());
     
     
     });