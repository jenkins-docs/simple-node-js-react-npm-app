pipeline {
  agent {
    kubernetes {
      yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: nodejs
    image: node:12.18.3
    command:
    - cat
    tty: true
"""
    }
  }
  stages {
    stage('Run maven') {
      steps {
        container('nodejs') {
          sh 'node --version'
        }
      }
    }
  }
}
