pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000'
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
            }
        }
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'MyID', usernameVariable: 'alexislopes', passwordVariable: '1234']]) {
            steps{
                sh("git tag -a some_tag -m 'Jenkins'")
                sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@prod-test --tags')
            }
        }
    }
   
}