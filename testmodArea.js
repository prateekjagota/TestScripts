#import "../TestScripts/tuneup_js/tuneup.js"
#import "config.js"

//Script not working as of now due to inablity to delete areas [ tapping settings button is not feasible]

test("To test area addition", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().tap();
     window.tableViews()[0].cells()["Areas"].tap();
     target.delay(2);
     assertEquals("Areas", window.navigationBar().name());
     window.toolbar().buttons()["ADD"].tap();
     target.delay(2);
     window.textFields()["areaTitle"].textFields()["areaTitle"].tap();
     target.delay(2);
     if (target.frontMostApp().keyboard().isVisible() == 1) {
        target.frontMostApp().keyboard().keys()["Delete"].touchAndHold(7);
        target.frontMostApp().keyboard().typeString(area_name);
        target.frontMostApp().keyboard().typeString("\n");
        target.delay(2);
     }
     window.navigationBar().rightButton().tap();
     target.delay(5);
     if (window.tableViews()[2].cells()[area_name].checkIsValid()) {
     test("To test area deletion", function(target, app) {
          window.tableViews()[2].cells()[area_name].tap();
          target.delay(2);
          target.frontMostApp().toolbar().buttons()["DELETE"].tap();
          target.delay(5);
          assertNotEquals(area_name,window.tableViews()[2].cells()[area_name].name(),"Area deleted successfully");
          });
     }
        else
          {
          UIALogger.logFail("Area not created")
          }
     });