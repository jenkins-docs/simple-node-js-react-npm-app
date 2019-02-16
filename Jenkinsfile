pipeline {
  agent {
    docker {
	image 'node:6-alpine'
    }
  }
  stages {
    stage('Test') {
      steps {
        script {
	  env.USERNAME = User.current().getId()
	  sh "echo ${USERNAME}"
        }
      }
    }
  }
}
