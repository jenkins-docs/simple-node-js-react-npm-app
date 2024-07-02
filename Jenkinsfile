pipeline {
    agent any
    
    parameters {
        booleanParam(name: 'USE_NX_CLOUD', defaultValue: false, description: 'Use Nx Cloud to build')
    }

    environment {
        NX_CLOUD = "${params.USE_NX_CLOUD}"
    }

    triggers {
        pollSCM('H/5 * * * *') // checks for changes every 5 minutes
    }

    stages {
        stage('Checkout') {
            steps {
                sh 'printenv'
                git branch: "${env.BRANCH_NAME}", url: 'https://github.com/roy94bit/simple-node-js-react-npm-app.git'
                echo "Building branch: ${env.BRANCH_NAME}"
            }
        }

        stage('Build') {
            steps {
                script {
                    if (env.NX_CLOUD.toBoolean()) {
                        sh 'echo Building with Nx Cloud...'
                        // Add your build commands here
                    } else {
                        sh 'echo Building without Nx Cloud...'
                        // Add your build commands here
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Add any cleanup commands here
        }
    }
}
