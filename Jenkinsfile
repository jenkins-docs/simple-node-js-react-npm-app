pipeline {
  agent {
    kubernetes {
      containerTemplate {
        name 'nodejs'
        image 'node:12.18.3'
      }

    }

  }
  stages {
    stage('NPM install') {
      steps {
        sh 'npm install'
      }
    }

  }
}