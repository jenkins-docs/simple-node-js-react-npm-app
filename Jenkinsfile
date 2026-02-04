pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Use bash to run the .sh script on Windows
                bat 'bash ./jenkins/scripts/test.sh'
            }
        }
    }
}