pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
metadata:
  labels:
    some-label: sample-app
spec:
  containers:
  - name: node
    image: node:6-alpine
    command:
    - cat
    tty: true
"""
        }
    }
    stages {
        stage('Build') { 
            steps {
                container('node') {
                    sh 'npm install'    
                }
            }
        }
    }
}