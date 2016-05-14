#!/bin/sh
UDID='iPhone 5s (8.1 Simulator)'
appPath='/Users/Prateek/Library/Developer/CoreSimulator/Devices/E2AC8799-A840-4535-9970-9BF0D1EE1374/data/Containers/Bundle/Application/CSRmeshApp/CSRmeshDemo.app'

tuneup_js/test_runner/run $appPath test_execute.js Logs/ -w "$UDID" -x -v

sleep 3

xsltproc nosetest-xunit-xslt-master/nosetests.xslt Logs/test_execute.xml > Report/"Report_`date`.html"


