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
                bat '%cd%/jenkins/scripts/test.bat' 
            }
        }
        stage('Deliver') {
            steps {
                bat '%cd%/jenkins/scripts/delivery.bat'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat '%cd%/jenkins/scripts/kill.sh'
            }
        }
    }
}