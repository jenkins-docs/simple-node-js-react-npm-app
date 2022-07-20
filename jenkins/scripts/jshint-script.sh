#!/bin/bash

cd /var/lib/jenkins/workspace/node-lint-pipeline

jshint $(ls ./**/*.js | grep -v node | grep js) *.js > /var/lib/jenkins/reports/jshint-report

echo $? > /dev/null
