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
    stage('NPM Install') {
      steps {
        container('nodejs') {
          sh 'npm ci'
        }
        container('nodejs') {
          sh 'npm run build'
        }
      }
    }
  }
}
