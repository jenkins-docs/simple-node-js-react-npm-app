pipeline {
    agent any

    environment {
        PORT = 3004
    }

    stages {
        stage('Checkout branch') {
            steps {
                git branch: 'main', url: 'https://github.com/Lokesh-Patnam/simple-node-js-react-npm-app.git'
            }
        }

        stage('Installing Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Building npm run') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Starting npm') {
            steps {
                sh 'npm start'
            }
        }
    }

    post {
        success {
            echo 'Pipeline Successful.'
        }
        failure {
            echo 'Pipeline Failed.'
        }
    }
}
