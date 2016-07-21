/*********************************** TEST CASE SYNOPSIS **************************************
 No Test case in Testlink
 PRECONDITION : NONE
 The script will be included in others script to ensure default handling of popups coming in between while execution.
  *********************************************************************************************/


var target = UIATarget.localTarget();
UIATarget.onAlert = function onAlert(alert)
        {
            var title = alert.name();
            UIALogger.logWarning("Alert with title '" + title + "' encountered!");
            return false;
    	}
i=0
try {
    //Reduce the value from i<10 to i<5, depending on the time as alert comes up
    while(i<1) {
        if (target.frontMostApp().alert().checkIsValid()) {
            target.frontMostApp().alert().defaultButton().vtap();
            break;
        } else {
            target.delay(1);
            i++;
        }
    }
} catch(e) {
    UIALogger.logDebug("Exception occured"+e);
}