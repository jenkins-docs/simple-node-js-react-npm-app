pipeline {
  agent any
  
  options {
    timestamps()
  }

  environment {
    AWS_DEFAULT_REGION = "eu-west-1"
  }
 
  stages {
    stage('Build') {
      steps {
        sh 'echo "HELLO WORLD!!!"'
      }
    }
    stage('Test') {
      steps {
        sh 'printenv'
        sh 'echo "BRANCH: ${BRANCH_NAME}"'
        sh 'echo $AWS_DEFAULT_REGION'
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'd818b032-44ef-4d09-b699-555c7150c5bd', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
          sh 'echo "Hello aws"'
        }
      }
    }

    stage('Deploy') {
      steps {
        sh './test.sh'
      }
    }
  }
}

