#!/bin/bash

cd /var/lib/jenkins/workspace/multibranch-project

jshint $(ls ./**/*.js ./**/*.ejs | grep -v node | grep js) *.js > /var/lib/jenkins/reports/jshint-report

echo $? > /dev/null
