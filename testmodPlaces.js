#import "../TestScripts/tuneup_js/tuneup.js"
#import "config.js"

//Pre-condition of this script -- Only one place is existing.

test("To test places addition", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().tap();
     target.delay(3);
     window.buttons()["menuSwitch"].tap();
     target.delay(3);
     window.tableViews()[1].cells()["+ Create a new place"].tap();
     target.delay(2);
     window.textFields()[0].textFields()[0].tap();
     if (target.frontMostApp().keyboard().isVisible() == 1) {
     target.frontMostApp().keyboard().typeString(place_name);
     target.delay(2);
     window.secureTextFields()[0].secureTextFields()[0].tap();
     target.frontMostApp().keyboard().typeString("qwerty\n");
     }
     window.navigationBar().rightButton().tap();
     window.navigationBar().leftButton().tap();
     target.delay(2);
     assertEquals(place_name, window.tableViews()[1].cells()[1].name());
     target.frontMostApp().mainWindow().buttons()["menuSwitch"].tap();
     window.tableViews()[0].cells()["CSRmesh devices"].tap();
      target.delay(2);
     });

test("To test places editing", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().tap();
     target.delay(3);
     window.buttons()["menuSwitch"].tap();
     target.delay(3);
     window.toolbar().buttons()["Manage places"].tap();
     target.delay(2);
     window.tableViews()[2].cells()[place_name].tap();
     target.delay(2);
     window.textFields()[0].textFields()[0].tap();
     if (target.frontMostApp().keyboard().isVisible() == 1) {
     target.frontMostApp().keyboard().keys()["Delete"].touchAndHold(5);
     target.frontMostApp().keyboard().typeString(place_name+"_edited");
     target.delay(2);
     window.secureTextFields()[0].secureTextFields()[0].tap();
     target.frontMostApp().keyboard().keys()["Delete"].touchAndHold(5);
     target.frontMostApp().keyboard().typeString("qwerty_edited\n");
     window.buttons()[0].tap();
     }
     target.delay(2);
     window.navigationBar().rightButton().tap();
     target.delay(2);
     window.navigationBar().leftButton().tap();
     target.delay(2);
     window.navigationBar().leftButton().tap();
     target.delay(2);
     assertEquals(place_name+"_edited", window.tableViews()[1].cells()[1].name());
     window.navigationBar().leftButton().tap();
     window.buttons()["menuSwitch"].tap();
     window.tableViews()[0].cells()["CSRmesh devices"].tap();
     target.delay(2);
     });

test("To test search of existing places", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().tap();
     target.delay(3);
     window.buttons()["menuSwitch"].tap();
     target.delay(3);
     window.toolbar().buttons()["Manage places"].tap();
     target.delay(2);
     window.navigationBar().rightButton().tap();
     if (target.frontMostApp().keyboard().isVisible() == 1) {
     target.frontMostApp().keyboard().typeString(place_name+"_edited\n");
     }
     target.delay(2);
     assertEquals(place_name+"_edited", window.tableViews()[1].cells()[1].name());
     window.tableViews()[2].buttons()["Cancel"].tap();
     window.navigationBar().leftButton().tap();
     window.buttons()["menuSwitch"].tap();
     window.tableViews()[0].cells()["CSRmesh devices"].tap();
     target.delay(2);
     });

//Note deletion script is dependent on above scripts, will fail in case above scripts fail.
test("To test deletion of existing places", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().tap();
     target.delay(3);
     window.buttons()["menuSwitch"].tap();
     target.delay(3);
     window.toolbar().buttons()["Manage places"].tap();
     target.delay(2);
     window.tableViews()[2].cells()[place_name+"_edited"].tap();
     target.delay(2);
     target.frontMostApp().mainWindow().buttons()["Delete"].tap();
     target.delay(3);
     assertNotEquals(place_name+"_edited", window.tableViews()[2].cells()[1].name());
     window.navigationBar().leftButton().tap();
     window.buttons()["menuSwitch"].tap();
     window.tableViews()[0].cells()["CSRmesh devices"].tap();
     target.delay(2);
     });

