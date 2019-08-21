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
        sh 'echo $BRANCH_NAME'
      }
    }

    stage('Deploy') {
      steps {
        sh './test.sh'
      }
    }
  }
}

