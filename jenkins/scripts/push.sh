#!/usr/bin/env sh

echo 'The following "git" command creates a new remote to the production repository'
set -x
git remote add prod https://github.com/alexislopes/prod-test.git


git push prod master
echo 'the Git command ran successfully'
