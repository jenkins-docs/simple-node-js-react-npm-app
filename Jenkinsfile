pipeline {
    agent any
    
    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                sh 'echo "HELLO WORLD!!!"'
            }
        }

        stage('Test') {
            steps {
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            steps {
                sh './test.sh'
            }
        }
    }
}

