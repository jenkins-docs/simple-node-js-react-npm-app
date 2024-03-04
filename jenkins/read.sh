#!/usr/bin/env sh

fp = ./jenkins/scripts/

for file in "$fp"/*; do
if [ -f "$file" ]; then
    echo "file: $file "
    echo "content"
    cat "$file"