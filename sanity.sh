#!/bin/sh
export DYLD_LIBRARY_PATH="/Users/c_rbazar/libimobiledevice-macosx":$DYLD_LIBRARY_PATH
PATH="/Users/c_rbazar/libimobiledevice-macosx:${PATH}"
export PATH
#UDID='iPhone 5s (9.3)'
UDID='c70c09592b5cc2c581a32394af19a3baa446bd30'
#iPod 2
#UDID='6820dc0a130c798fbd2dbb170a1fadf42e42bc7d'
#UDID='26b370b6c5b1b1d2e221b1d9c24f221e94683dae'
appPath='CSRmeshDemo'
#appPath='CSRmeshLibraryDeviceTests'
#appPath='/Users/c_rbazar/Library/Developer/CoreSimulator/Devices/FBFF0D20-B085-4CE5-8021-05462483FBB0/data/Containers/Bundle/Application/A9919103-F2C3-47BC-8275-CB5958EC6A9D/CSRmeshDemo.app'
#appPath='/Users/c_rbazar/Library/Developer/CoreSimulator/Devices/FBFF0D20-B085-4CE5-8021-05462483FBB0/data/Containers/Bundle/Application/F3099C2A-14FD-47F1-950F-C52EC2E12E61/CSRmeshLibraryDeviceTests.app'
#appPath='/Users/c_rbazar/Library/Developer/CoreSimulator/Devices/1998FB5E-DFCD-498B-9A7D-DE59EAAB195D/data/Containers/Bundle/Application/0832D415-2536-4D50-A8C7-AB5ABA018D07/CSRmeshDemo.app'

idevicesyslog -u "$UDID" > iOSLogs/"iOSLogCapture_`date`.txt" -d &

tuneup_js/test_runner/run $appPath testAppVersion.js Logs/ -w "$UDID" -x -v -a 3

sleep 3

xsltproc nosetest-xunit-xslt-master/nosetests.xslt Logs/test_execute.xml > Report/"Report_`date`.html"

killall idevicesyslog




