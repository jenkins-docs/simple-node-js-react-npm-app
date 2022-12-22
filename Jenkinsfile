pipeline {
    agent any
    
    // tools { nodejs "node"}
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') { 
            steps {
                bash './jenkins/scripts/test.sh' 
            }
        }
    }
}