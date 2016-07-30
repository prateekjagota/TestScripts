#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"
#import "UtilityFunctions.js"

//Script cleans up devices and areas screen

test("Clean up devices and areas screen", function(target, app) {
     var window = app.mainWindow();
     /*var device_length = window.tableViews()[0].cells().length;
     UIALogger.logDebug("Device length: "+device_length);
     if (device_length > 0) {
     for (var i =0;i < device_length;i++) {
     window.tableViews()[0].cells()[0].buttons()[0].vtap();
     window.toolbar().buttons()["DELETE"].vtap();
     UIATarget.onAlert = function onAlert(alert)
     {
     return true;
     }
     target.frontMostApp().alert().buttons()["Yes"].vtap();
     UIALogger.logDebug("Device deleted: "+ (i+1));
     target.delay(2);
     }
     }*/
     //Deleting all areas
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Areas"].vtap();
     var area_length = window.tableViews()[2].cells().length;
     UIALogger.logDebug("Area length: "+area_length);
     if (area_length > 0) {
     for (var j =0;j < area_length;j++) {
     try {
     window.tableViews()[2].cells()[0].buttons()[0].vtap();
     window.toolbars()[2].buttons()["DELETE"].vtap();
     UIALogger.logDebug("Area deleted: "+ (j+1));
     target.delay(2);
     } catch(e) {}
     }
     }
     UIALogger.logMessage("Creating areas as part of Test Bed setup..")
     add_areas(window);
     });

test("Delete all events", function(target, app) {
   var window = app.mainWindow();
     delete_all_events(window);
     });
