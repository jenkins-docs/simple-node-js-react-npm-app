pipeline {
  agent {
    docker {
      image 'maven:3-alpine'
      args '-v /root/.m2:/root/.m2'
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
          withCredentials([usernamePassword(credentialsId: $credentials_id, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            sh 'mvn liquibase:update -D db_name=$dbname -D username=$USERNAME -D password=$PASSWORD -D conf=short'
          }
        }
      }
    }
  }
}

