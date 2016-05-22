#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"

function device_addition(window, device_name,device_pairing_code) {
    window.navigationBar().leftButton().vtap();
    window.tableViews()[0].cells()["CSRmesh devices"].vtap();
    //Adding First device
    window.toolbar().buttons()["ADD"].vtap();
    target.frontMostApp().actionSheet().collectionViews()[0].cells()["Detected Devices List"].buttons()["Detected Devices List"].vtap();
    window.tableViews()[0].cells()[device_name].vtap();
    window.toolbar().buttons()["ASSOCIATE"].vtap();
    if (device_pairing_code != null) {
        window.popover().textFields()[0].vtap();
        target.delay(2);
        var dkeyboard = target.frontMostApp().keyboard();
        if (dkeyboard.isVisible() == 1) {
            dkeyboard.setInterKeyDelay(0.3);
            dkeyboard.typeString(device_pairing_code);
        }
    }
    window.popover().buttons()[1].vtap();
    try {
        while (window.popover().staticTexts()[4].name() != "Associating device: 100%") {
            UIALogger.logDebug(window.popover().staticTexts()[4].name());
        }
    } catch(e) {
        UIALogger.logDebug("Exception in Association Text");
    }
    target.delay(3);
    assertTrue(window.tableViews()[0].cells()[device_name].checkIsValid(), "Device Added Successfully");
}
test("To test devices addition", function(target, app) {
     var window = app.mainWindow();
     device_addition(window, device_name1,device1_pairing_code);
     device_addition(window, device_name2,device2_pairing_code);
     });