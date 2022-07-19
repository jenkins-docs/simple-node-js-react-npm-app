#!/bin/bash

//cd /var/lib/jenkins/workspace/multibranch-project

sh 'echo jshint $(ls ./**/*.js | grep -v node | grep js) *.js'

//jshint $(ls ./**/*.js ./**/*.ejs | grep -v node | grep js) *.js > /var/lib/jenkins/reports/jshint-report

//echo $? > /dev/null
