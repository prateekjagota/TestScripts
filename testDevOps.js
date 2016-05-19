#import "../TestScripts/tuneup_js/tuneup.js"
#import "config.js"

test("To test Developer Options Screen", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().tap();
     target.delay(3);
     window.tableViews()[0].cells()["Developer options"].scrollToVisible();
     target.delay(2);
     window.tableViews()[0].cells()["Developer options"].tap();
     target.delay(2);
     window.scrollViews()[0].textFields()[0].textFields()[0].tap();
     target.delay(2);
     if (target.frontMostApp().keyboard().isVisible() == 1) {
     target.frontMostApp().keyboard().keys()["Delete"].touchAndHold(5);
     target.frontMostApp().keyboard().typeString(cloud_url);
     target.delay(2);
     }
     window.navigationBar().rightButton().tap();
     target.delay(2);
     });