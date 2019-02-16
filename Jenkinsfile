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
	  sh "echo ${USERNAME}"
	  sh "echo ${USERJENKINS}"
	  wrap([$class: 'BuildUser']) {
	    def user = env.BUILD_USER_ID
	    sh "echo ${user}"
	  }
        }
      }
    }
  }
}
