pipeline {
  agent {
    docker {
      image 'node:lts-buster-slim'
      args '-p 3000:3000'
       args '-u root:root'
    }

  }
      environment {
        CI = 'true'
    }
  stages {
    stage('Build') {
      steps {
        sh 'pwd'
        sh 'echo "hello world" '
        sh 'npm install'
      }
    }
     stage('Test') { 
            steps {
                sh './jenkins/scripts/test.sh' 
            }
        }

  }
}
