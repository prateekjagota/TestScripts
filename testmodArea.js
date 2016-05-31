#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"


//Dependent on Cleanup script
test("To test area deletion", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Areas"].vtap();
     //loop to get index of settings button
     cell_length=window.tableViews()[2].cells().length;
     for(var i =0;i<cell_length;i++) {
     if (window.tableViews()[2].cells()[i].name() == area_name1) {
     window.tableViews()[2].cells()[i].buttons()[0].vtap();
     }
     }
     target.frontMostApp().toolbar().buttons()["DELETE"].vtap();
     target.delay(3);
     assertNotEquals(area_name1,window.tableViews()[2].cells()[area_name1].name(),"Area deleted successfully");
     });


test("To test area addition", function(target, app) {
     var window = app.mainWindow();
     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["Areas"].vtap();
     assertEquals("Areas", window.navigationBar().name());
     window.toolbar().buttons()["ADD"].vtap();
     window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
     target.delay(2);
     window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name1);
     window.navigationBar().rightButton().vtap();
     target.delay(3);
     assertTrue(window.tableViews()[2].cells()[area_name1].checkIsValid(), "Area Added Successfully");
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
     if (window.tableViews()[2].cells()[i].name() == area_name1) {
     window.tableViews()[2].cells()[i].buttons()[0].vtap();
     }
     }
     window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
     target.delay(2);
     window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name1+"_edited");
     //Assign Device
    window.navigationBar().rightButton().vtap();
     assertTrue(window.tableViews()[2].cells()[area_name1+"_edited"].isVisible(), "Area Edited Successfully");
     window.navigationBar().leftButton().vtap();
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
     if (window.tableViews()[2].cells()[i].name() == area_name1+"_edited") {
     window.tableViews()[2].cells()[i].buttons()[0].vtap();
     }
     }
     window.tableViews()[2].groups()["DEVICES"].buttons()["EDIT"].vtap();
     window.tableViews()[2].cells()[device_name1].vtap();
     window.navigationBar().rightButton().vtap();
     assertEquals(device_name1,window.tableViews()[2].cells()[0].staticTexts()[0].name())
     target.delay(6);
     window.navigationBar().rightButton().vtap();
     for(var i =0;i<cell_length;i++) {
     if (window.tableViews()[2].cells()[i].name() == area_name1+"_edited") {
     window.tableViews()[2].cells()[i].buttons()[0].vtap();
     }
     }
     window.textFields()["areaTitle"].textFields()["areaTitle"].vtap();
     target.delay(2);
     window.textFields()["areaTitle"].textFields()["areaTitle"].setValue(area_name1);
     //Assign Device
     window.navigationBar().rightButton().vtap();
     target.delay(3);
     });

     

//Search functionality not supported yet on app