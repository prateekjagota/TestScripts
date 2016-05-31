//For all functions definitions

//Device Addition
function device_addition(window,device_name,device_udid,device_pairing_code) {
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
        window.popover().textFields()[0].setValue(device_pairing_code);
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

//Search Device
function device_search(window,device_name) {
    //window.navigationBar().leftButton().vtap();
    //window.tableViews()[0].cells()["CSRmesh devices"].vtap();
    window.tableViews()[0].searchBars()[0].vtap();
    window.searchBars()[0].searchBars()[0].setValue(device_name);
    assertTrue(window.tableViews()[0].cells()[device_name].checkIsValid(), "Device Visible after search");
}

//Edit Device
function device_edit(window,device_name) {
    window.tableViews()[0].cells()[device_name].scrollToVisible();
    //loop to get index of settings button
    cell_length=window.tableViews()[0].cells().length;
    for(var i =0;i<cell_length;i++) {
        if (window.tableViews()[0].cells()[i].name() == device_name) {
            window.tableViews()[0].cells()[i].buttons()[0].vtap();
        }
    }
}

//Create Areas for testbed setup

function add_areas(window) {
    window.navigationBar().leftButton().vtap();
    window.tableViews()[0].cells()["Areas"].vtap();
    window.toolbar().buttons()["ADD"].vtap();
    window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
    target.delay(2);
    window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name1);
    window.navigationBar().rightButton().vtap();
    window.toolbar().buttons()["ADD"].vtap();
    window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
    target.delay(2);
    window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name2);
    window.navigationBar().rightButton().vtap();
    window.toolbar().buttons()["ADD"].vtap();
    window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
    target.delay(2);
    window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name3);
    window.navigationBar().rightButton().vtap();
    window.toolbar().buttons()["ADD"].vtap();
    window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
    target.delay(2);
    window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name4);
    window.navigationBar().rightButton().vtap();
  
}
