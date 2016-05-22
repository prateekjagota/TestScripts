#import "../TestScripts/tuneup_js/tuneup.js"
#import "config.js"




test("To verify App Version", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["About"].scrollToVisible();
     window.tableViews()[0].cells()["About"].vtap();
     target.delay(2);
     assertEquals(app_version, window.staticTexts()[2].value());
     });