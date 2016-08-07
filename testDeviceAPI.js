#import "../TestScripts/tuneup_js/tuneup.js"
#import "../TestScripts/tuneup_js/uiautomation-ext.js"

function api_clicks(window,api_version) {
    window.segmentedControls()[0].buttons()[api_version].vtap();
    j=0
    var arr_apiName=[];
    try {
        element_count=window.tableViews()[0].elements().length;
        UIALogger.logMessage("Total elements on screen: "+element_count);
        while(j<element_count) {
            element_name=window.tableViews()[0].elements()[j].name();
            if (element_name.indexOf('ModelApi') != -1 || element_name.indexOf('ModeApi') != -1 || element_name.indexOf('MODELAPI') != -1 || element_name.indexOf('MODEAPI') != -1) {
                UIALogger.logMessage("API Name: "+element_name);
                act_apiName=element_name;
                act_actionName='::';
            }
            else {
                window.tableViews()[0].elements()[j].scrollToVisible();
                target.delay(0.5);
                UIALogger.logMessage("Tapping Action Visible: "+element_name);
                window.tableViews()[0].elements()[j].vtap();
                act_actionName=element_name;
            }
            arr_apiName.push([act_apiName,act_actionName]);
            j+=1
        }
    } catch(e) {
        UIALogger.logMessage("List shorter then expected" + e);
    }
    UIALogger.logMessage("Complete list fetched "+JSON.stringify(arr_apiName));
    /*arr_apiName = arr_apiName.filter(function(elem, index, self) {
                            return index == self.indexOf(elem);
                            })*/
    //UIALogger.logMessage("List of APIs: "+arr_apiName);
    //target.delay(1);
    //window.tableViews()[0].cells()[action_type].vtap();
}

test("To test clicking of APIs", function(target, app) {
     var window = app.mainWindow();
     api_clicks(window,"1.3");
     api_clicks(window,"2.0.1");
     api_clicks(window,"2.1");
     //API Tests for 1.3
     /*icks(window,"1.3","ACTIONMODELAPI","deleteAction");
     api_clicks(window,"1.3","ACTIONMODELAPI","getAction");
     api_clicks(window,"1.3","ACTUATORMODELAPI","getTypes");
     api_clicks(window,"1.3","ACTUATORMODELAPI","setValue");
     api_clicks(window,"1.3","ACTUATORMODELAPI","getValue");
     api_clicks(window,"1.3","ASSETMODELAPI","setStateRequest");
     api_clicks(window,"1.3","ASSETMODELAPI","getStateRequest");
     api_clicks(window,"1.3","ATTENTIONMODELAPI","setState");
     api_clicks(window,"1.3","BATTERYMODELAPI","getState");
     
     //API Tests for 2.0.1
     api_clicks(window,"2.0.1","ACTIONMODELAPI","getState");
     api_clicks(window,"2.0.1","ACTIONMODELAPI","deleteAction");
     api_clicks(window,"2.0.1","ACTIONMODELAPI","getAction");
     
     //API Tests for 2.1
     api_clicks(window,"2.1","ACTIONMODELAPI","getState");
     api_clicks(window,"2.1","ACTIONMODELAPI","deleteAction");
     api_clicks(window,"2.1","ACTIONMODELAPI","getAction");*/
     });