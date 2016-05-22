#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"
#import "config.js"


/*test("To test area addition", function(target, app) {
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
     });*/

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
     target.delay(3);
     assertTrue(window.tableViews()[2].cells()[area_name+"_edited"].isVisible(), "Area Edited Successfully");

     window.navigationBar().leftButton().vtap();
     window.tableViews()[0].cells()["CSRmesh devices"].vtap();
     });
     

//Dependent on Area addition test

     /*if (window.tableViews()[2].cells()[area_name].checkIsValid()) {
     test("To test area deletion", function(target, app) {
          window.tableViews()[2].cells()[area_name].vtap();
          target.delay(2);
          target.frontMostApp().toolbar().buttons()["DELETE"].vtap();
          target.delay(5);
          assertNotEquals(area_name,window.tableViews()[2].cells()[area_name].name(),"Area deleted successfully");
          });
     }
        else
          {
          UIALogger.logFail("Area not created")
          }*/