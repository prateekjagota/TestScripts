//For all functions definitions

//Device Addition
function device_addition(window,device_name,device_udid,device_pairing_code) {
    //Adding First device
    window.toolbars()[2].buttons()["ADD"].tap();
    //window.toolbar().buttons()["ADD"].vtap();
    target.frontMostApp().actionSheet().collectionViews()[0].cells()["Detected Devices List"].tap();
    //target.frontMostApp().mainWindow().popover().actionSheet().collectionViews()[0].cells()["Detected Devices List"].buttons()["Detected Devices List"].tap();
    //target.frontMostApp().actionSheet().collectionViews()[0].cells()["Detected Devices List"].buttons()["Detected Devices List"].vtap();
    target.delay(10);
    var counter=0
    for (counter=0;counter<=15;counter++) {
        target.delay(2);
        UIALogger.logMessage("Elements Visible: "+target.frontMostApp().mainWindow().tableViews()[2].cells()[counter].name())
        target.delay(1);
        UIALogger.logMessage("Index "+counter);
        if (target.frontMostApp().mainWindow().tableViews()[2].cells()[counter].staticTexts()[1].name() == device_udid) {
            UIALogger.logMessage("Device Found..");
            target.frontMostApp().mainWindow().tableViews()[2].cells()[counter].staticTexts()[1].scrollToVisible();
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
    assertTrue(window.tableViews()[2].cells()[device_name].checkIsValid(), "Device Added Successfully");
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
    assertTrue(window.tableViews()[2].cells()[device_name].checkIsValid(), "Device Visible after search");
    window.buttons()["Cancel"].vtap();
    target.delay(2);
    
}

//Edit Device
function device_edit(window,device_name) {
    window.tableViews()[2].cells()[device_name].scrollToVisible();
    //loop to get index of settings button
    cell_length=window.tableViews()[2].cells().length;
    for(var i =0;i<cell_length;i++) {
        if (window.tableViews()[2].cells()[i].name() == device_name) {
            window.tableViews()[2].cells()[i].buttons()[0].vtap();
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
        if (window.tableViews()[2].cells()[i].name() == device_name+"_edited") {
            window.tableViews()[2].cells()[i].buttons()[0].vtap();
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
    window.tableViews()[2].cells()[device_name].scrollToVisible();
    window.tableViews()[2].cells()[device_name].vtap();
    if (window.switches()[0].value() == 0) {
        window.switches()[0].setValue(1);
    }
    UIALogger.logMessage("Drag Value "+change_value/100)
    window.sliders()[0].dragToValue(change_value/100);
    UIALogger.logMessage("Value after dragging "+ window.sliders()[0].value());
    window.navigationBar().leftButton().vtap();
}

function control_light_W(window,device_name,change_value) {
    window.tableViews()[2].cells()[device_name].scrollToVisible();
    window.tableViews()[2].cells()[device_name].vtap();
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
    window.tableViews()[2].cells()[device_name].scrollToVisible();
    window.tableViews()[2].cells()[device_name].vtap();
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

//Controlling heater temperature
function control_temp_heater(window,change_value) {
    //Creating area with one heater and sensor
    window.navigationBar().leftButton().vtap();
    window.tableViews()[0].cells()["Areas"].vtap();
    window.toolbars()[2].buttons()["ADD"].vtap();
    window.textFields()["areaTitle"].vtap();
    target.delay(2);
    window.textFields()["areaTitle"].setValue("Temperature control area");
    window.tableViews()[2].groups()["DEVICES"].buttons()["EDIT"].vtap();
    //Device_name of heater/sensor as mentioned in config file
    window.tableViews()[2].cells()[device_name3].vtap();
    window.tableViews()[2].cells()[device_name4].vtap();
    window.navigationBar().rightButton().vtap();
    target.delay(8);
    window.navigationBar().rightButton().vtap();
    target.delay(3);
    //Controlling temperature
    //If device assignment to area doesn't work mention the area name which already has heater and sensor
    window.tableViews()[2].cells()["Temperature control area"].vtap();
    act_temp = window.staticTexts()[4].name();
    UIALogger.logMessage("Actual Temperature: "+act_temp);
    var_temp = window.staticTexts()[3].name();
    var_temp=var_temp.split(" ")
    if (change_value == var_temp[0]) {
        UIALogger.logMessage("No change required, temperature alerady set at desired value");
    }
    if (change_value < var_temp[0]) {
        while(window.staticTexts()[3].name() != change_value+" °C") {
            window.buttons()[3].vtap();
            UIALogger.logMessage("Changed value: "+window.staticTexts()[3].name());
        }
        window.buttons()[2].vtap();
    }
    if (change_value > var_temp[0]) {
        while(window.staticTexts()[3].name() != change_value+" °C") {
            window.buttons()[2].vtap();
            UIALogger.logMessage("Changed value: "+window.staticTexts()[3].name());
        }
        window.buttons()[3].vtap();
    }
    target.delay(2);
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
    target.delay(10);
    window.navigationBar().leftButton().vtap();
    window.navigationBar().rightButton().vtap();
    window.tableViews()[0].cells()["CSRmesh devices"].vtap();
    target.delay(5);
}

//Create Light color Event

function create_light_color_event(window,event_name,device_name1,device_name2,light_W,light_RGB,event_date,event_time,repetition_flag) {
    window.navigationBar().leftButton().vtap();
    window.tableViews()[0].cells()["Events"].vtap();
    window.toolbars()[2].buttons()["Add"].vtap();
    target.delay(2);
    target.frontMostApp().actionSheet().collectionViews()[0].cells()["Light Color Event"].buttons()["Light Color Event"].tap();
    //window.scrollViews()[0].textFields()[0].vtap();
    window.scrollViews()[0].textFields()[0].setValue(event_name);
    try {
    target.frontMostApp().keyboard().typeString("\n");
    }
    catch(e) {}
    window.toolbars()[2].buttons()["Next"].vtap();
    try {
    if (window.scrollViews()[0].switches()[0].value() == 0) {
        window.scrollViews()[0].switches()[0].setValue(1);
    }
    } catch(e) {}
    //.scrollViews()[0].switches()[0].setValue(0);
    window.scrollViews()[0].buttons()["W"].vtap();
    UIALogger.logMessage("Drag Value "+light_W/100);
    UIALogger.logMessage("Current Value "+ window.popover().sliders()[0].value());
    try {
        window.popover().sliders()[0].dragToValue(light_W/100);
    }
    catch(e) {
        UIALogger.logMessage("Unable to drag, value after dragging "+ window.popover().sliders()[0].value());
    }
    window.popover().buttons()["Done"].vtap();
    window.scrollViews()[0].buttons()["RGB"].vtap();
    change_value_R = light_RGB.split("_")[0]
    change_value_G = light_RGB.split("_")[1]
    change_value_B = light_RGB.split("_")[2]
    
    UIALogger.logMessage("Values "+ change_value_R +" " + change_value_G + " "+ change_value_B)
    window.popover().textFields()[0].setValue(change_value_R);
    window.popover().textFields()[1].setValue(change_value_G);
    window.popover().textFields()[2].setValue(change_value_B);
    window.popover().buttons()["Done"].vtap();
    window.toolbars()[2].buttons()["Next"].vtap();
    window.scrollViews()[0].tableViews()[0].cells()[device_name1].vtap();
    window.scrollViews()[0].tableViews()[0].cells()[device_name2].vtap();
    window.toolbars()[2].buttons()["Next"].vtap();
    window.scrollViews()[0].tableViews()[1].cells()["Time"].vtap();
    event_time_hr=event_time.split("-")[0];
    event_time_mm=event_time.split("-")[1];
    event_time_ampm=event_time.split("-")[2];
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[0].selectValue(event_date);
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[1].selectValue(event_time_hr);
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[2].selectValue(event_time_mm);
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[3].selectValue(event_time_ampm);
    if (repetition_flag == 1)
    {
    window.scrollViews()[0].tableViews()[1].cells()["Repeat"].vtap();
    window.popover().segmentedControls()[0].buttons()["Daily"].vtap();
    window.popover().buttons()["Done"].vtap();
    }
    window.toolbars()[2].buttons()["Validate"].vtap();
    target.delay(3);
}

//Create light power event
function create_light_power_event(window,event_name,device_name1,device_name2,var_ON_OFF,event_date,event_time,repetition_flag) {
    window.navigationBar().leftButton().vtap();
    window.tableViews()[0].cells()["Events"].vtap();
    window.toolbars()[2].buttons()["Add"].vtap();
    target.delay(2);
    target.frontMostApp().actionSheet().collectionViews()[0].cells()["Light Power Event"].buttons()["Light Power Event"].tap();
    window.scrollViews()[0].textFields()[0].setValue(event_name);
    try {
        target.frontMostApp().keyboard().typeString("\n");
    }
    catch(e) {}
    window.toolbars()[2].buttons()["Next"].vtap();
    if (var_ON_OFF == "ON") {
        window.scrollViews()[0].staticTexts()["Turn on lights"].vtap();
    }
    else {
       window.scrollViews()[0].staticTexts()["Turn off lights"].vtap();
    }
    window.toolbars()[2].buttons()["Next"].vtap();
    window.scrollViews()[0].tableViews()[0].cells()[device_name1].vtap();
    window.scrollViews()[0].tableViews()[0].cells()[device_name2].vtap();
     window.toolbars()[2].buttons()["Next"].vtap();
    window.scrollViews()[0].tableViews()[1].cells()["Time"].vtap();
    event_time_hr=event_time.split("-")[0];
    event_time_mm=event_time.split("-")[1];
    event_time_ampm=event_time.split("-")[2];
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[0].selectValue(event_date);
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[1].selectValue(event_time_hr);
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[2].selectValue(event_time_mm);
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[3].selectValue(event_time_ampm);
    if (repetition_flag == 1)
    {
        window.scrollViews()[0].tableViews()[1].cells()["Repeat"].vtap();
        window.popover().segmentedControls()[0].buttons()["Daily"].vtap();
        window.popover().buttons()["Done"].vtap();
    }
    window.toolbars()[2].buttons()["Validate"].vtap();
    target.delay(3);
}

//Create heating event
function create_heating_event(window,event_name,heater_name,set_temp,event_date,event_time,repetition_flag) {
    window.navigationBar().leftButton().vtap();
    window.tableViews()[0].cells()["Events"].vtap();
    window.toolbars()[2].buttons()["Add"].vtap();
    target.delay(2);
    target.frontMostApp().actionSheet().collectionViews()[0].cells()["Heating Event"].buttons()["Heating Event"].tap();
    window.scrollViews()[0].textFields()[0].setValue(event_name);
    try {
        target.frontMostApp().keyboard().typeString("\n");
    }
    catch(e) {}
    window.toolbars()[2].buttons()["Next"].vtap();
    //set_temp variable cannot be used fully as no value is displayed while creating any heating event, after being fixed this code can be used.
    //Below code need to be changed once fixed on app UI
    window.scrollViews()[0].buttons()[0].vtap();
    window.scrollViews()[0].buttons()[0].vtap();
    window.scrollViews()[0].buttons()[0].vtap();
    window.scrollViews()[0].buttons()[1].vtap();
    window.scrollViews()[0].buttons()[1].vtap();
    window.scrollViews()[0].buttons()[1].vtap();
    window.toolbars()[2].buttons()["Next"].vtap();
    window.scrollViews()[0].tableViews()[0].cells()[heater_name].vtap();
    window.toolbars()[2].buttons()["Next"].vtap();
    window.scrollViews()[0].tableViews()[1].cells()["Time"].vtap();
    event_time_hr=event_time.split("-")[0];
    event_time_mm=event_time.split("-")[1];
    event_time_ampm=event_time.split("-")[2];
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[0].selectValue(event_date);
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[1].selectValue(event_time_hr);
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[2].selectValue(event_time_mm);
    window.scrollViews()[0].tableViews()[1].cells()[1].pickers()[0].wheels()[3].selectValue(event_time_ampm);
    if (repetition_flag == 1)
    {
        window.scrollViews()[0].tableViews()[1].cells()["Repeat"].vtap();
        window.popover().segmentedControls()[0].buttons()["Daily"].vtap();
        window.popover().buttons()["Done"].vtap();
    }
    window.toolbars()[2].buttons()["Validate"].vtap();
    target.delay(3);
}
