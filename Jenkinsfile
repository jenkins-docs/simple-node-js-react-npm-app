pipeline {
  agent any
  
  tools {nodejs "node-11.10.0"}


  stages {
    stage('Build') {
      steps {
        sh 'echo "HELLO WORLD!!!"'
      }
    }
    stage('Test') {
      steps {
        sh 'ls -l'
      }
    }

    stage('Deploy') {
      steps {
        sh './test.sh'
      }
    }
  }
}

