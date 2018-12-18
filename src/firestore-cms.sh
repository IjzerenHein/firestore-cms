#!/bin/bash

# DIR=./node_modules/firestore-cms/src
CONFIG_FILE=./firestore-cms.js

./node_modules/.bin/haul bundle --config $CONFIG_FILE --platform ios
if [ $? -eq 0 ]; then
	open ./stats.html
fi
