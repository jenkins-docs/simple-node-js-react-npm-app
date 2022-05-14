FROM jenkins/jenkins:2.332.3-jdk11
USER root
RUN apt-get update && apt-get install -y lsb-release
RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
  https://download.docker.com/linux/debian/gpg
RUN echo "deb [arch=$(dpkg --print-architecture) \
  signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
RUN apt-get update && apt-get install -y docker-ce-cli
USER jenkins
RUN jenkins-plugin-cli --plugins "blueocean:1.25.3 docker-workflow:1.28"

#### HELPFUL INFORMATION BELOW ####

#### Create Network ####
# docker network create jenkins

##### Build command from repostiroy root #####
# docker build -t myjenkins-blueocean:2.332.3-1 .

#### Run container command ####
# docker run --name jenkins-blueocean --rm --detach ^
#   --network jenkins --env DOCKER_HOST=tcp://docker:2376 ^
#   --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 ^
#   --volume jenkins-data:/var/jenkins_home ^
#   --volume jenkins-docker-certs:/certs/client:ro ^
#   --volume "%HOMEDRIVE%%HOMEPATH%":/home ^
#   --publish 8080:8080 --publish 50000:50000 myjenkins-blueocean:2.332.3-1