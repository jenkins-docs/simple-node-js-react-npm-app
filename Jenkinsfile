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
                // Keep your working test command here
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
        }
        stage('Deliver') {
            steps {
                // Start the development server in the background
                bat 'start /B npm start'
                // Wait a moment for the server to start
                bat 'timeout /t 10 /nobreak > nul'
                // Manual approval step
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                // Stop the server (taskkill finds and stops the node process)
                bat 'taskkill /F /IM node.exe > nul 2>&1'
            }
        }
    }
}