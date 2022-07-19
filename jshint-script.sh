#!/bin/bash

cd /{JENKINS HOME DIRECTORY}/workspace/node-lint-pipeline

jshint $(ls ./**/*.js ./**/*.ejs | grep -v node | grep js) *.js > /{JENKINS HOME DIRECTORY}/reports/jshint-report

echo $? > /dev/null
