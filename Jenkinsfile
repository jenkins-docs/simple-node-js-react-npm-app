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
                // Run React tests directly (no .sh script needed)
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
        }
    }
}