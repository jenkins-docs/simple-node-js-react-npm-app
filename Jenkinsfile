pipeline {
  agent {
    docker {
      image 'node:12-alpine'
    }

  }
  stages {
    stage('CHECK OUT') {
      steps {
        sh 'checkout scm'
      }
    }

    stage('build') {
      steps {
        sh 'sh npm install'
      }
    }

  }
}