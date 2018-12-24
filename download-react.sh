#!/bin/bash

echo "Downloading React $@"

#echo "What is the location of the mmg-cdn-shared-libraries repo in your machine?"
#read -e LOCATION
#
#echo "Location is $LOCATION"

node index.js $@

mkdir ~/Desktop/CodeAcuris/mmg-cdn-shared-libraries/cdn/react/$@
cp ./react.js ~/Desktop/CodeAcuris/mmg-cdn-shared-libraries/cdn/react/$@
cp ./react.min.js ~/Desktop/CodeAcuris/mmg-cdn-shared-libraries/cdn/react/$@

mkdir ~/Desktop/CodeAcuris/mmg-cdn-shared-libraries/cdn/react-dom/$@
cp ./react-dom.js ~/Desktop/CodeAcuris/mmg-cdn-shared-libraries/cdn/react-dom/$@
cp ./react-dom.min.js ~/Desktop/CodeAcuris/mmg-cdn-shared-libraries/cdn/react-dom/$@