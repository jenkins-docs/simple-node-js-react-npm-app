pipeline {
  agent {
    docker {
      image 'node:lts-buster-slim'
      args '-p 3000:3000'
       args '-u root:root'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'pwd'
        sh 'npm install'
      }
    }

  }
}
