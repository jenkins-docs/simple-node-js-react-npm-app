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
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
        }
        stage('Deliver') {
            steps {
                // 1. Display a message (instead of actually starting the server)
                bat 'echo "Application would be available at http://localhost:3000"'
                
                // 2. Manual approval step
                input message: 'Ready to complete delivery? (Click "Proceed" to finish)'
                
                // 3. Simple completion message
                bat 'echo "Delivery stage completed successfully."'
            }
        }
    }
}