#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"


test("To test area addition", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Areas"].vtap();
     assertEquals("Areas", window.navigationBar().name());
     window.toolbar().buttons()["ADD"].vtap();
     window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
     target.delay(2);
     var dkeyboard = target.frontMostApp().keyboard();
     if (dkeyboard.isVisible() == 1) {
        dkeyboard.setInterKeyDelay(0.3);
        dkeyboard.keys()["Delete"].touchAndHold(5);
        dkeyboard.typeString(area_name);
        dkeyboard.typeString("\n");
     }
     window.navigationBar().rightButton().vtap();
     target.delay(3);
     assertTrue(window.tableViews()[2].cells()[area_name].checkIsValid(), "Area Added Successfully");
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["CSRmesh devices"].vtap();
     });

//Dependent on Area addition test

test("To test area editing", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Areas"].vtap();
     //loop to get index of settings button
     cell_length=window.tableViews()[2].cells().length;
     for(var i =0;i<cell_length;i++) {
     if (window.tableViews()[2].cells()[i].name() == area_name) {
     window.tableViews()[2].cells()[i].buttons()[0].vtap();
     }
     }
     window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
     target.delay(2);
     var dkeyboard = target.frontMostApp().keyboard();
     if (dkeyboard.isVisible() == 1) {
     dkeyboard.setInterKeyDelay(0.3);
     dkeyboard.keys()["Delete"].touchAndHold(5);
     dkeyboard.typeString(area_name+"_edited");
     dkeyboard.typeString("\n");
     }
     //Assign Device
    window.navigationBar().rightButton().vtap();
     assertTrue(window.tableViews()[2].cells()[area_name+"_edited"].isVisible(), "Area Edited Successfully");

     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["CSRmesh devices"].vtap();
     });

//Dependent on Area addition and editing test

test("To test assigning device to area", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Areas"].vtap();
     //loop to get index of settings button
     cell_length=window.tableViews()[2].cells().length;
     for(var i =0;i<cell_length;i++) {
     if (window.tableViews()[2].cells()[i].name() == area_name+"_edited") {
     window.tableViews()[2].cells()[i].buttons()[0].vtap();
     }
     }
     window.tableViews()[2].groups()["DEVICES"].buttons()["EDIT"].vtap();
     window.tableViews()[2].cells()[device_name1].vtap();
     window.navigationBar().rightButton().vtap();
     assertEquals(device_name1,window.tableViews()[2].cells()[0].staticTexts()[0].name())
     target.delay(6);
     window.navigationBar().rightButton().vtap();
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["CSRmesh devices"].vtap();
     });



//Dependent on Area addition and editing test
test("To test area deletion", function(target, app) {
        var window = app.mainWindow();
        window.navigationBar().leftButton().vtap();
        window.tableViews()[0].cells()["Areas"].vtap();
        //loop to get index of settings button
        cell_length=window.tableViews()[2].cells().length;
        for(var i =0;i<cell_length;i++) {
        if (window.tableViews()[2].cells()[i].name() == area_name+"_edited") {
        window.tableViews()[2].cells()[i].buttons()[0].vtap();
        }
        }
          target.frontMostApp().toolbar().buttons()["DELETE"].vtap();
          target.delay(3);
          assertNotEquals(area_name,window.tableViews()[2].cells()[area_name].name(),"Area deleted successfully");
          });


//Search functionality not supported yet on app