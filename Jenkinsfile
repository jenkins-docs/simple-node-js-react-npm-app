pipeline {
    agent {
        dockerContainer {
            image 'node:lts-buster-slim'
            connector {
                dockerPortMappings([[class: 'DockerPortMapping', containerPort: 3000, hostPort: 3000, protocol: 'tcp']])
            }
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
