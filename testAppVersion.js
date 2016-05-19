#import "../TestScripts/tuneup_js/tuneup.js"
#import "config.js"




test("To verify App Version", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().tap();
     target.delay(3);
     window.tableViews()[0].cells()["About"].scrollToVisible();
     target.delay(2);
     window.tableViews()[0].cells()["About"].tap();
     target.delay(2);
     assertEquals(app_version, window.staticTexts()[2].value());
     target.delay(2);
     });