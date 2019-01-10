pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3027:3027' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}