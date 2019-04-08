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
	  wrap([$class: 'BuildUser']) {
	    def user = env.BUILD_USER_ID
	    sh "echo ${user}"
	  }
        }
      }
    }
  }
}
