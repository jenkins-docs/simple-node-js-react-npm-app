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
          env.DATABASE = input (
            message: 'Input DB name: ',
            ok: 'Submit',
            parameters: [string(defaultValue: '', description: 'target database', name: 'DB')]
          )
          env.CREDENTIALS = input (
            message: 'Input username: ',
            ok: 'Submit',
            parameters: [string(defaultValue: '', description: 'credentials id', name: 'CREDENTIALS')]
          )
          env.CONFIG = input (
            message: 'Configuration',
            ok: 'Submit',
            parameters: [choice(name: 'Configuration to deploy', choices: "full\nshort", description: 'What configuration you want to deploy?')]
          )
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: ${CREDENTIALS}, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            sh "mvn liquibase:update -D url=46.4.202.170:5432 -D db_name=${DATABASE} -D username=$USERNAME -D password=$PASSWORD -D conf=$CONFIGt -f tafs/pom.xml"
          }
        }
      }
    }
  }
}

