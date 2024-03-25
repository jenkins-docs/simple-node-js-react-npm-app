pipeline {
    agent {
        docker { image 'node:20.11.1-alpine3.19' }
    }
    stages {
        stage('Build') {
            steps {
                echo "start building now"
            }
        }
        stage('Test') {
            when{ changeset "./jenkins/scripts/*.txt"}
            steps {
                sh 'chmod +x ./deliver.sh'
                 sh 'chmod +x deliver.sh'
                sh './deliver.sh'
            }
         }
        stage('Deliver') {
            steps {
                echo "done now"
            }
        }
    }
}
