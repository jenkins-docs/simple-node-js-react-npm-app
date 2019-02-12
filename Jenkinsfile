pipeline {
  agent {
    docker {
	image 'node:6-alpine'
    }
  }
  stages {
    stage('Launch') {
      steps {
        script {
          def db_name = input (
            message: 'Input DB name: ',
            ok: 'Submit',
            parameters: [string(defaultValue: '', description: 'target database', name: 'DB')]
          )
          def credentials_id = input (
            message: 'Input username: ',
            ok: 'Submit',
            parameters: [string(defaultValue: '', description: 'credentials id', name: 'CREDENTIALS')]
          )
	  sh "cd tafs"
	  sh "pwd"
	  DB = db_name
          withCredentials([usernamePassword(credentialsId: credentials_id, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            sh "mvn liquibase:update -D db_name=$DB -D username=$USERNAME -D password=$PASSWORD -D conf=short"
          }
        }
      }
    }
  }
}

