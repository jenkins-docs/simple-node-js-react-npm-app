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
        sh 'printenv'
        sh 'echo'
        sh 'echo "********"'
        sh 'echo "* BRANCH: ${BRANCH_NAME}"'
        sh 'echo "********"'
      }
    }

    stage('Deploy') {
      steps {
        sh './test.sh'
      }
    }
  }
}

