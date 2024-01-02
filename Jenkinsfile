pipeline {
    agent {
    kubernetes {
    yaml '''
        apiVersion: v1
        kind: Pod
        metadata:
            labels:
                some-label: some-label-value
        spec:
            containers:
            - name: node
            image: node:lts-buster-slim
            command:
            - cat
            tty: true
    '''
    retries 2
    }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                container('node') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                container('node') {
                    sh './jenkins/scripts/test.sh'
                }
            }
        }
        stage('Deliver') {
            steps {
                container('node') {
                    sh './jenkins/scripts/deliver.sh'
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
                }
            }
        }
    }
}
