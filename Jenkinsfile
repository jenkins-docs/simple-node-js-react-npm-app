pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                parallel(
                    client: {
                        echo "This is branch client"
                        bat '%cd%/client/jenkins/scripts/build.bat'
                    },
                    server: {
                        echo "This is branch server"
                        bat '%cd%/server/jenkins/scripts/build.bat'
                    }
                )
            }
        }
        stage('Test') { 
            steps {
                bat '%cd%/client/jenkins/scripts/test.bat' 
                parallel(
                    client: {
                        echo "This is branch client"
                        bat '%cd%/client/jenkins/scripts/test.bat'
                    },
                    server: {
                        echo "This is branch server"
                        bat '%cd%/server/jenkins/scripts/test.bat'
                    }
                )
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