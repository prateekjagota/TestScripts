#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"

//Pre-condition of this script -- Only one place is existing.

test("To test places addition", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.buttons()["menuSwitch"].vtap();
     window.tableViews()[1].cells()["+ Create a new place"].vtap();
     window.textFields()[0].textFields()[0].vtap();
     target.delay(2);
     var dkeyboard = target.frontMostApp().keyboard();
     if (dkeyboard.isVisible() == 1) {
     dkeyboard.setInterKeyDelay(0.3);
     dkeyboard.typeString(place_name);
     window.secureTextFields()[0].secureTextFields()[0].vtap();
     dkeyboard.typeString("qwerty\n");
     }
     window.navigationBar().rightButton().vtap();
     window.navigationBar().leftButton().vtap();
     assertEquals(place_name, window.tableViews()[1].cells()[1].name());
     target.frontMostApp().mainWindow().buttons()["menuSwitch"].vtap();
     window.tableViews()[0].cells()["CSRmesh devices"].vtap();
      target.delay(2);
     });

test("To test places editing", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.buttons()["menuSwitch"].vtap();
     window.toolbar().buttons()["Manage places"].vtap();
     window.tableViews()[2].cells()[place_name].vtap();
     window.textFields()[0].textFields()[0].vtap();
     target.delay(2);
     var dkeyboard = target.frontMostApp().keyboard();
     if (dkeyboard.isVisible() == 1) {
     dkeyboard.setInterKeyDelay(0.3);
     dkeyboard.keys()["Delete"].touchAndHold(5);
     dkeyboard.typeString(place_name+"_edited");
     window.secureTextFields()[0].secureTextFields()[0].vtap();
     dkeyboard.keys()["Delete"].touchAndHold(5);
     dkeyboard.typeString("qwerty_edited\n");
     window.buttons()[0].vtap();
     }
     window.navigationBar().rightButton().vtap();
     window.navigationBar().leftButton().vtap();
     window.navigationBar().leftButton().vtap();
     assertEquals(place_name+"_edited", window.tableViews()[1].cells()[1].name());
     window.navigationBar().leftButton().vtap();
     window.buttons()["menuSwitch"].vtap();
     window.tableViews()[0].cells()["CSRmesh devices"].vtap();
     });

test("To test search of existing places", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.buttons()["menuSwitch"].vtap();
     window.toolbar().buttons()["Manage places"].vtap();
     window.navigationBar().rightButton().vtap();
     target.delay(2);
     var dkeyboard = target.frontMostApp().keyboard();
     if (dkeyboard.isVisible() == 1) {
     dkeyboard.setInterKeyDelay(0.3);
     dkeyboard.typeString(place_name+"_edited\n");
     }
     assertEquals(place_name+"_edited", window.tableViews()[1].cells()[1].name());
     window.tableViews()[2].buttons()["Cancel"].vtap();
     window.navigationBar().leftButton().vtap();
     window.buttons()["menuSwitch"].vtap();
     window.tableViews()[0].cells()["CSRmesh devices"].vtap();
     });

//Note deletion script is dependent on above scripts, will fail in case above scripts fail.
test("To test deletion of existing places", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.buttons()["menuSwitch"].vtap();
     window.toolbar().buttons()["Manage places"].vtap();
     window.tableViews()[2].cells()[place_name+"_edited"].vtap();
     target.frontMostApp().mainWindow().buttons()["Delete"].vtap();
     target.delay(3);
     assertNotEquals(place_name+"_edited", window.tableViews()[2].cells()[1].name());
     window.navigationBar().leftButton().vtap();
     window.buttons()["menuSwitch"].vtap();
     window.tableViews()[0].cells()["CSRmesh devices"].vtap();
     });

