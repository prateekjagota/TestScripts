#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"
#import "UtilityFunctions.js"


test("To create Light Color Event", function(target, app) {
     var window = app.mainWindow();
     create_light_color_event(window, "test_event","Light 1","Light 2","35","70_400_50","Thu Jul 21","8-30-AM",1);
});