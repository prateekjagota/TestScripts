//For all functions definitions

//Device Addition
function device_addition(window,device_name,device_udid,device_pairing_code) {
    //Adding First device
    window.toolbars()[2].buttons()["ADD"].tap();
    //window.toolbar().buttons()["ADD"].vtap();
    target.frontMostApp().mainWindow().popover().actionSheet().collectionViews()[0].cells()["Detected Devices List"].buttons()["Detected Devices List"].tap();
    //target.frontMostApp().actionSheet().collectionViews()[0].cells()["Detected Devices List"].buttons()["Detected Devices List"].vtap();
    target.delay(10);
    var counter=0
    for (counter=0;counter<=10;counter++) {
        target.delay(2);
        UIALogger.logMessage("Elements Visible: "+target.frontMostApp().mainWindow().tableViews()[2].cells()[counter].name())
        target.delay(1);
        UIALogger.logMessage("Index "+counter);
        if (target.frontMostApp().mainWindow().tableViews()[2].cells()[counter].staticTexts()[1].name() == device_udid) {
            UIALogger.logMessage("Device Found..");
            target.frontMostApp().mainWindow().tableViews()[2].cells()[counter].staticTexts()[1].vtap();
            break;
        }
    }
    target.delay(2);
    target.frontMostApp().mainWindow().toolbars()[2].buttons()["ASSOCIATE"].vtap();
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
    //window.tableViews()[0].searchBars()[0].vtap();
    window.navigationBar().rightButton().vtap();
    //window.searchBars()[0].searchBars()[0].setValue(device_name);
    window.searchBars()["Search"].vtap();
    window.searchBars()["Search"].setValue(device_name);
    assertTrue(window.tableViews()[0].cells()[device_name].checkIsValid(), "Device Visible after search");
    window.buttons()["Cancel"].vtap();
    target.delay(2);
    
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
    //window.textFields()[0].textFields()[0].vtap();
    window.textFields()[0].vtap();
    //window.textFields()[0].textFields()[0].setValue(device_name+"_edited");
    window.textFields()[0].setValue(device_name+"_edited");
    window.navigationBar().rightButton().vtap();
    target.delay(2);
    cell_length=window.tableViews()[0].cells().length;
    for(var i =0;i<cell_length;i++) {
        if (window.tableViews()[0].cells()[i].name() == device_name+"_edited") {
            window.tableViews()[0].cells()[i].buttons()[0].vtap();
        }
    }
    //window.textFields()[0].textFields()[0].vtap();
    window.textFields()[0].vtap();
    //window.textFields()[0].textFields()[0].setValue(device_name);
    window.textFields()[0].setValue(device_name);
    window.navigationBar().rightButton().vtap();
    target.delay(2);
}

//Create Areas for testbed setup

function add_areas(window) {
    window.navigationBar().leftButton().vtap();
    window.tableViews()[0].cells()["Areas"].vtap();
    window.toolbars()[2].buttons()["ADD"].vtap();
    //window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
    window.textFields()["areaTitle"].vtap();
    target.delay(2);
    //window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name1);
    window.textFields()["areaTitle"].setValue(area_name1);
    window.navigationBar().rightButton().vtap();
    window.toolbars()[2].buttons()["ADD"].vtap();
    //window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
    window.textFields()["areaTitle"].vtap();
    target.delay(2);
    //window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name2);
    window.textFields()["areaTitle"].setValue(area_name2);
    window.navigationBar().rightButton().vtap();
    window.toolbars()[2].buttons()["ADD"].vtap();
    //window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
    window.textFields()["areaTitle"].vtap();
    target.delay(2);
    //window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name3);
    window.textFields()["areaTitle"].setValue(area_name3);
    window.navigationBar().rightButton().vtap();
    window.toolbars()[2].buttons()["ADD"].vtap();
    window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
     window.textFields()["areaTitle"].vtap();
    target.delay(2);
    //window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name4);
    window.textFields()["areaTitle"].setValue(area_name4);
    window.navigationBar().rightButton().vtap();
  
}

//Control Devices

function control_light_brightness(window,device_name,change_value) {
    window.tableViews()[0].cells()[device_name].scrollToVisible();
    window.tableViews()[0].cells()[device_name].vtap();
    if (window.switches()[0].value() == 0) {
        window.switches()[0].setValue(1);
    }
    UIALogger.logMessage("Drag Value "+change_value/100)
    window.sliders()[0].dragToValue(change_value/100);
    UIALogger.logMessage("Value after dragging "+ window.sliders()[0].value());
    window.navigationBar().leftButton().vtap();
}

function control_light_W(window,device_name,change_value) {
    window.tableViews()[0].cells()[device_name].scrollToVisible();
    window.tableViews()[0].cells()[device_name].vtap();
    if (window.switches()[0].value() == 0) {
        window.switches()[0].setValue(1);
    }
    window.buttons()["W"].vtap();
    UIALogger.logMessage("Drag Value "+change_value/100);
    UIALogger.logMessage("Current Value "+ window.popover().sliders()[0].value());
    try {
        window.popover().sliders()[0].dragToValue(change_value/100);
    }
    catch(e) {
        UIALogger.logMessage("Unable to drag, value after dragging "+ window.popover().sliders()[0].value());
    }
    window.popover().buttons()["Done"].vtap();
    window.navigationBar().leftButton().vtap();
}

function control_light_RGB(window,device_name,change_value) {
    //Change value of RGB should be Red_Green_blue eg: 70_400_50
    window.tableViews()[0].cells()[device_name].scrollToVisible();
    window.tableViews()[0].cells()[device_name].vtap();
    if (window.switches()[0].value() == 0) {
        window.switches()[0].setValue(1);
    }
    change_value_R = change_value.split("_")[0]
    change_value_G = change_value.split("_")[1]
    change_value_B = change_value.split("_")[2]
    
    UIALogger.logMessage("Values "+ change_value_R +" " + change_value_G + " "+ change_value_B)
    window.buttons()["RGB"].vtap();
    window.popover().textFields()[0].setValue(change_value_R);
    window.popover().textFields()[1].setValue(change_value_G);
    window.popover().textFields()[2].setValue(change_value_B);
    window.popover().buttons()["Done"].vtap();
    window.navigationBar().leftButton().vtap();
}

// Setting-Up Gateway-Bridge
function device_addBridge(window,device_name) {
    window.navigationBar().leftButton().vtap();
    window.tableViews()[0].cells()["Developer options"].scrollToVisible();
    window.tableViews()[0].cells()["Developer options"].vtap();
    window.toolbar().buttons()["Select Bridge"].vtap();
    target.delay(10);
    var counter=0
    for (counter=0;counter<=10;counter++) {
        target.delay(2);
        UIALogger.logMessage("Elements Visible: "+target.frontMostApp().mainWindow().tableViews()[0].cells()[counter].name())
        target.delay(1);
        UIALogger.logMessage("Index "+counter);
        if (target.frontMostApp().mainWindow().tableViews()[0].cells()[counter].staticTexts()[0].name() == device_name) {
            UIALogger.logMessage("Device Found..");
            target.frontMostApp().mainWindow().tableViews()[0].cells()[counter].staticTexts()[0].vtap();
            try {
                target.frontMostApp().alert().defaultButton().tap();
            } catch(e) {}
            break;
        }
    }
    target.delay(20);
    window.navigationBar().leftButton().vtap();
    window.navigationBar().rightButton().vtap();
    window.tableViews()[0].cells()["CSRmesh devices"].vtap();
    target.delay(5);
}

