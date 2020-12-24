pipeline {
  agent {
    kubernetes {
      yaml """
apiVersion: v1
kind: Pod
metadata:
labels:
  component: ci
spec:
  containers:
  - name: nodejs
    image: node:12.18.3
    command:
    - cat
    tty: true
  - name: docker
    image: docker:latest
    command:
    - cat
    tty: true
    volumeMounts:
    - mountPath: /var/run/docker.sock
      name: docker-sock
  volumes:
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
"""
    }
  }
  stages {
    stage('NPM install') {
      steps {
        container('nodejs') {
          sh 'npm ci'
        }
      }
    }
    stage('Build Zensurance mono repo') {
      steps {
        container('nodejs') {
          sh 'npm run build'
        }
      }
    }
    stage('Build Docker Images') {
      parallel {
        stage('Build App Docker Img') {
          steps {
            container('docker') {
              sh 'docker build -t zen-app:pr-$BUILD_NUMBER -f ./Dockerfile.app'
            }
          }
        }
        stage('Build API Docker Img') {
          steps {
            container('docker') {
              sh 'docker build -t zen-api:pr-$BUILD_NUMBER -f ./Dockerfile.app'
            }
          }
        }
      }
    }
  }
}
