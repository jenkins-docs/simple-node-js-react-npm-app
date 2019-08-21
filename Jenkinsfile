pipeline {
  agent any
  
  stages {
    stage('Build') {
      steps {
        sh 'echo "HELLO WORLD!!!"'
      }
    }
    stage('Test') {
      steps {
        sh 'ls -l'
        sh 'printenv'
      }
    }

    stage('Deploy') {
      steps {
        sh './test.sh'
      }
    }
  }
}

