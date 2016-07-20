#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"
#import "UtilityFunctions.js"


test("To create Light Color Event", function(target, app) {
     var window = app.mainWindow();
     create_light_color_event(window, "test_light_color_event","Light 1","Light 2","35","70_400_50","Thu Jul 21","8-30-AM",1);
});

test("To create Light Power Event", function(target, app) {
var window = app.mainWindow();
create_light_power_event(window,"test_light_power_event","Light 1","Light 2","OFF","Thu Jul 21","10-45-PM",0)
});


test("To create Heating Event", function(target, app) {
     var window = app.mainWindow();
     create_heating_event(window,"test_heating_event","Heater 6","Yes","Thu Jul 21","10-45-PM",1)
});
