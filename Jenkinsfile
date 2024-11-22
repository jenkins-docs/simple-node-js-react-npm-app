pipeline {
    agent { docker { image 'node:22.11.0-alpine3.20' } }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
         stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
    }
}
