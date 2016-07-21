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
UIALogger.logMessage("Inside Alert Handling")
    i=0
    //Reduce the value from i<10 to i<5, depending on the time as alert comes up
    while(i<5) {
        if (target.frontMostApp().alert().checkIsValid()) {
            target.frontMostApp().alert().defaultButton().vtap();
            break;
        } else {
            target.delay(1);
            i++;
        }
    }