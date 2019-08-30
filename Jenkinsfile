pipeline {
  agent any
  
  options {
    timestamps()
  }

  environment {
    AWS_DEFAULT_REGION = "eu-west-1"
  }
 
  stages {

    stage('Test') {
      steps {
        sh 'printenv'
        sh 'echo "BRANCH: ${BRANCH_NAME}"'
        sh 'echo $AWS_DEFAULT_REGION'
      }
    }
  }
}

