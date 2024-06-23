pipeline {
    agent any

    stages {
        stage('Verify Docker') {
            steps {
                script {
                    // Verify Docker is available
                    sh 'docker --version'
                }
            }
        }
        stage('Build and Test') {
            steps {
                script {
                    // Define Docker image and run commands inside it
                    docker.image('node:14').inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Package') {
            steps {
                script {
                    // Define Docker image and run commands inside it
                    docker.image('node:14').inside {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Serve') {
            steps {
                script {
                    // Run the application on port 3004
                    docker.image('node:14').inside {
                        sh 'npm start &'
                        sleep 10 // Give it some time to start
                        sh 'curl -f http://localhost:3004 || exit 1'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'The application is running on http://localhost:3004'
        }
        failure {
            echo 'Pipeline execution failed'
        }
    }
}
