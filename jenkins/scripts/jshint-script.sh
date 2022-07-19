#!/bin/bash

cd /{JENKINS HOME DIRECTORY}/workspace/node-lint-pipeline

jshint $(ls ./**/*.js ./**/*.ejs | grep -v node | grep js) *.js > /var/lib/jenkins/reports/jshint-report

echo $? > /dev/null