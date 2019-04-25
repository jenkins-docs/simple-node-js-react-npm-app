#!/usr/bin/env sh

echo 'The following "git" command creates a new remote to the production repository'
set -x
sudo git push
echo 'the Git command ran successfully'
