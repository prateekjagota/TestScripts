#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"
#import "UtilityFunctions.js"


test("To create Light Color Event", function(target, app) {
     var window = app.mainWindow();
     create_light_color_event(window, "test_light_color_event","Light 4","Light 5","35","70_400_50","Thu Jul 21","8-30-AM",1);
});

test("To create Light Power Event", function(target, app) {
var window = app.mainWindow();
create_light_power_event(window,"test_light_power_event","Light 4","Light 5","OFF","Thu Jul 21","10-45-PM",0)
});


test("To create Heating Event", function(target, app) {
     var window = app.mainWindow();
     create_heating_event(window,"test_heating_event","Heater 6","Yes","Thu Jul 21","10-45-PM",1)
});



test("To edit date and time of Light color event", function(target, app) {
     var window = app.mainWindow();
     edit_event_date_time(window,"test_light_color_event","Fri Jul 22","10-30-AM")
     });

test("To edit date and time of Light power event", function(target, app) {
     var window = app.mainWindow();
     edit_event_date_time(window,"test_light_power_event","Fri Jul 22","10-30-AM")
     });

test("To edit date and time of Heating event", function(target, app) {
     var window = app.mainWindow();
     edit_event_date_time(window,"test_heating_event","Fri Jul 22","10-30-AM")
     });
