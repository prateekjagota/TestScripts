#import "../TestScripts/tuneup_js/tuneup.js"
#import "config.js"

test("To test Developer Options Screen", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Developer options"].scrollToVisible();
     window.tableViews()[0].cells()["Developer options"].vtap();
     window.scrollViews()[0].textFields()[0].textFields()[0].vtap();
     target.delay(2);
     var dkeyboard = target.frontMostApp().keyboard();
     if (dkeyboard.isVisible() == 1) {
     //Adding delay in between the keys tapping, added 1sec of delay can reduce it to 0.5 or 0.1 depending on machine performance, by default its 0.03
     dkeyboard.setInterKeyDelay(0.3);
     dkeyboard.keys()["Delete"].touchAndHold(5);
     dkeyboard.typeString(cloud_url);
     }
     window.navigationBar().rightButton().vtap();
     target.delay(2);
     });