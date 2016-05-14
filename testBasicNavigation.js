#import "../TestScripts/tuneup_js/tuneup.js"
#import "config.js"

//Script will execute on start of automation suite, to verify basic navigation flow.

test("Navigation Flow", function(target, app) {
     var window = app.mainWindow();
     i=0
     try {
     //Reduce the value from i<10 to i<5, depending on the time as alert comes up
     while(i<3) {
     if (target.frontMostApp().alert().checkIsValid()) {
     target.frontMostApp().alert().defaultButton().tap();
     break;
     } else {
        target.delay(1);
        i++;
        }
     }
     } catch(e) {
     UIALogger.logDebug("Exception occured"+e);
     }
     //Testing Favourite Screen
     window.navigationBar().leftButton().tap();
     target.delay(2);
     window.tableViews()[0].cells()["Favourites"].tap();
     target.delay(2);
     assertEquals("Favourites", window.navigationBar().name());
     target.delay(3);
     assertEquals("Activities", window.segmentedControls()[0].buttons()[0].name());
     assertEquals("Devices & Areas", window.segmentedControls()[0].buttons()[1].name());
     window.segmentedControls()[0].buttons()["Activities"].tap();
     window.segmentedControls()[0].buttons()["Devices & Areas"].tap();
     //Favourite screen navigation complete
     
     //Testing Events Screen
     window.navigationBar().leftButton().tap();
     target.delay(2);
     window.tableViews()[0].cells()["Events"].tap();
     target.delay(2);
     assertEquals("Events", window.navigationBar().name());
     target.delay(3);
     assertEquals("ALL", window.segmentedControls()[0].buttons()[0].name());
     assertEquals("LIGHT COLOR", window.segmentedControls()[0].buttons()[1].name());
     assertEquals("LIGHT POWER", window.segmentedControls()[0].buttons()[2].name());
     assertEquals("HEATING", window.segmentedControls()[0].buttons()[3].name());
     window.segmentedControls()[0].buttons()["ALL"].tap();
     window.segmentedControls()[0].buttons()["LIGHT COLOR"].tap();
     window.segmentedControls()[0].buttons()["LIGHT POWER"].tap();
     window.segmentedControls()[0].buttons()["HEATING"].tap();
     window.toolbar().buttons()["Add"].tap();
     target.delay(3);
     target.frontMostApp().actionSheet().collectionViews()[0].cells()["Cancel"].buttons()["Cancel"].tap();
     target.delay(2);
     
     //Testing Areas Screen
     window.navigationBar().leftButton().tap();
     target.delay(2);
     window.tableViews()[0].cells()["Areas"].tap();
     target.delay(2);
     assertEquals("Areas", window.navigationBar().name());
     assertTrue(window.tableViews()[2].searchBars()[0].checkIsValid(), "Search bar exists");
     window.tableViews()[2].searchBars()[0].tap();
     target.delay(2);
     window.buttons()["Cancel"].tap();
     target.delay(2);
     target.frontMostApp().toolbar().buttons()["ADD"].tap();
     target.delay(2);
     target.frontMostApp().navigationBar().leftButton().tap();
     target.delay(2);

     
     //Testting CSRmesh devices screen
     window.navigationBar().leftButton().tap();
     target.delay(2);
     window.tableViews()[0].cells()["CSRmesh devices"].tap();
     target.delay(2);
     assertEquals("CSRmesh Devices", window.navigationBar().name());
     assertTrue(window.tableViews()[2].searchBars()[0].checkIsValid(), "Search bar exists");
     window.tableViews()[2].searchBars()[0].tap();
     target.delay(2);
     window.buttons()["Cancel"].tap();
     target.delay(2);

     
     //Testing Controllers screen
     window.navigationBar().leftButton().tap();
     target.delay(2);
     window.tableViews()[0].cells()["Controllers"].tap();
     target.delay(2);
     assertEquals("Controllers", window.navigationBar().name());
     window.toolbar().buttons()["Add"].tap();
     target.delay(2);
     window.navigationBar().leftButton().tap();
     target.delay(2);
     
     //Testing Users screen
     window.navigationBar().leftButton().tap();
     target.delay(2);
     window.tableViews()[0].cells()["Users"].tap();
     target.delay(2);
     assertEquals("Users", window.navigationBar().name());
     
     
     //Testing Import place screen
     window.navigationBar().leftButton().tap();
     target.delay(2);
     window.tableViews()[0].cells()["Import place"].tap();
     target.delay(2);
     assertEquals("Export/Import Database", window.navigationBar().name());
     
     
     });