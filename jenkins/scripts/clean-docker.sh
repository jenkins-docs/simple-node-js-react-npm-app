#!/bin/bash
#sh 'docker stop $(docker ps -q)'
#sh 'docker rm $(docker ps -q)'
#sh 'docker rmi -f $(docker images registry-1.docker.io/aabdelhay/test-app -q)'

#removing container
containers=`docker ps -aq`
if [ ! -z $containers ]
then
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
else
echo "No containers found for cleanup"
fi
#removing images
images=`docker images registry-1.docker.io/aabdelhay/test-app -q`
if [ ! -z $images ]
then
docker rmi -f $(docker images aabdelhay/test-app -q) | exit 0
else
echo "No images found for cleanup"
fi

#removing <none> images
none_images=`docker images | grep "^<none>" | awk '{ print $3 }'`
if [ ! -z $none_images ]
then
docker rmi $(docker images | grep "^<none>" | awk '{ print $3 }')
else
echo "No <none> images found for cleanup"
fi
#removing Dangling images
dangling_images=`sudo docker images -f "dangling=true" -q`
if [ ! -z $dangling_images  ]
then
   docker rmi $(docker images -f "dangling=true" -q)
else
   echo "No Dangling images found for cleanup"
fi
echo "Docker Images cleanup Done"
