pipeline {
  agent {
    docker {
	image 'node:6-alpine'
    }
  }
  stages {
    stage('Input') {
      steps {
        script {
	  env.USERNAME = User.current()
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
	  sh "echo ${USERNAME}"
        }
      }
    }
  }
}
