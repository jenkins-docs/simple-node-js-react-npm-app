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
	  env.USERJENKINS = Jenkins.getAuthentication().getName()
	  sh "echo User.current().getId() ${USERNAME}"
	  sh "Jenkins.getAuthentication().getName() ${USERJENKINS}"
        }
      }
    }
  }
}
