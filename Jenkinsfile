pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3333:3000'
        }
    }
    stages {
        stage('Clean Workspace'){
            cleanWs()
        }
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
    post {
        always {
            /* 
            Record and aggregate test results.
            This will always grab the test results and let Jenkins track them, 
            calculate trends and report on them. 
            A Pipeline that has failing tests will be marked as "UNSTABLE", 
            denoted by yellow in the web UI. 
            That is distinct from the "FAILED" state, denoted by red.
            */
            junit 'build/reports/**/*.xml'            
        }
        failure {
            echo 'This will run only if failed'
            mail to: 'michael.zhang@mclarens.co.nz',
                 subject: "Failed pipeline: ${currentBuild.fullDisplayName}",
                 body: "Something is wrong with ${env.BUILD_URL}"
        }
        cleanup {
            echo 'Cleaning the workspace'
            cleanWs()
        }
    }
}
