#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"

function device_addition(window,device_name,device_udid,device_pairing_code) {
    //window.navigationBar().leftButton().vtap();
    //window.tableViews()[0].cells()["CSRmesh devices"].vtap();
    //Adding First device
    window.toolbar().buttons()["ADD"].vtap();
    target.frontMostApp().actionSheet().collectionViews()[0].cells()["Detected Devices List"].buttons()["Detected Devices List"].vtap();
    target.delay(10);
    var counter=0
    for (counter=0;counter<=10;counter++) {
        target.delay(2);
        UIALogger.logMessage("Elements Visible: "+target.frontMostApp().mainWindow().tableViews()[0].cells()[counter].name())
        target.delay(1);
        UIALogger.logMessage("Index "+counter);
        if (target.frontMostApp().mainWindow().tableViews()[0].cells()[counter].staticTexts()[1].name() == device_udid) {
            UIALogger.logMessage("Device Found..");
            target.frontMostApp().mainWindow().tableViews()[0].cells()[counter].staticTexts()[1].vtap();
            break;
        }
    }
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
        while (window.popover().staticTexts()[4].name() != null) {
            UIALogger.logDebug(window.popover().staticTexts()[4].name());
        }
    } catch(e) {
        UIALogger.logDebug("Exception in Association Text");
    }
    window.textFields()[0].vtap();
    window.textFields()[0].setValue(device_name);
    window.navigationBar().rightButton().vtap();
    target.delay(3);
    assertTrue(window.tableViews()[0].cells()[device_name].checkIsValid(), "Device Added Successfully");
}

test("To test devices addition", function(target, app) {
     var window = app.mainWindow();
     //device_addition(device_name1,device_name1_udid,device1_pairing_code);
     device_addition(window, device_name2,device_name2_udid,device2_pairing_code);
     });