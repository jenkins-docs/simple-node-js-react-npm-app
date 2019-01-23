pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') { 
            steps {
                bat './jenkins/scripts/test.sh' 
            }
        }
    }
}