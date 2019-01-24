pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                parallel(
                    a: {
                        echo "This is branch a"
                        bat '%cd%/client/jenkins/scripts/build.bat'
                    },
                    b: {
                        echo "This is branch b"
                        bat '%cd%/server/jenkins/scripts/build.bat'
                    }
                )
            }
        }
        stage('Build-server') {
            steps {
                bat '%cd%/client/jenkins/scripts/build.bat'
            }
        }
        stage('Test') { 
            steps {
                bat '%cd%/client/jenkins/scripts/test.bat' 
            }
        }
        stage('Deliver') {
            steps {
                bat '%cd%/client/jenkins/scripts/delivery.bat'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat '%cd%/client/jenkins/scripts/kill.sh'
            }
        }
    }
}