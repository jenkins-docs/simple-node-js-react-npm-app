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
        sh 'echo "new step added 2" '
         sh 'echo "new step added 3" '
        sh 'echo "new step added" '
        sh 'echo "new step added for webhook" '
        sh 'npm install'
      }
    }
     stage('Test') { 
            steps {
                sh './jenkins/scripts/test.sh' 
            }
        }
    stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }

  }
}
