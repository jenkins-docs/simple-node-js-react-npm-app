pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
            reuseNode true
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
