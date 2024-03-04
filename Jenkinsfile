pipeline {
    agent {
        docker { image 'node:20.11.1-alpine3.19' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/read.sh'
            }
         }
        stage('Deliver') {
            steps {
                echo "done now"
            }
        }
    }
}