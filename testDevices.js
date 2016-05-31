#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"
#import "UtilityFunctions.js"


test("To test devices addition", function(target, app) {
     var window = app.mainWindow();
     device_addition(window, device_name1,device_name1_udid,device1_pairing_code);
     device_addition(window, device_name2,device_name2_udid,device2_pairing_code);
     device_addition(window, device_name3,device_name3_udid,device3_pairing_code);
     device_addition(window, device_name4,device_name4_udid,device4_pairing_code);
    });

test("To test device search", function(target, app) {
     var window = app.mainWindow();
     device_search(window, device_name4);
     });

test("To test device editing", function(target, app) {
     var window = app.mainWindow();
     device_edit(window, device_name4);
    });
