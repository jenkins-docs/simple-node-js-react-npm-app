pipeline {
    agent none
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            // steps {
                parallel{
                    stage("Build-Client") {
                        agent any
                        steps{
                            echo "This is branch client"
                            bat '%cd%/client/jenkins/scripts/build.bat'
                        }
                    }
                    stage("Build-Server") {
                        agent any
                        steps{
                            echo "This is branch server"
                            bat '%cd%/server/jenkins/scripts/build.bat'
                        }
                    }
                }
                    
            // }
        }
        stage('Test') { 
            // steps {
                parallel{
                    stage("Test-Client") {
                        agent any
                        steps{
                            echo "This is branch client"
                            bat '%cd%/client/jenkins/scripts/test.bat'
                        }
                    }
                    stage("Test-Server") {
                        agent any
                        steps{
                            echo "This is branch server"
                            bat '%cd%/server/jenkins/scripts/test.bat'
                        }
                    }
                }
            // }
        }
        stage('Deliver') {
            agent any
            steps {
                bat '%cd%/client/jenkins/scripts/delivery.bat'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat '%cd%/client/jenkins/scripts/kill.sh'
            }
        }
    }
}