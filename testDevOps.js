#import "../TestScripts/tuneup_js/tuneup.js"
#import "config.js"

test("To test Developer Options Screen", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Developer options"].scrollToVisible();
     window.tableViews()[0].cells()["Developer options"].vtap();
     window.scrollViews()[0].textFields()[0].textFields()[0].vtap();
     target.delay(2);
     window.scrollViews()[0].textFields()[0].textFields()[0].setValue(cloud_url);
     window.navigationBar().rightButton().vtap();
     target.delay(2);
     });