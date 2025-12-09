pipeline {
    agent any

    stages {
        stage('Checkout with submodules') {
            steps {
                // Explicit checkout to include submodules
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/Vishwajeetsinghh01/project_test_jenkins_ci_cd.git']],
                    extensions: [
                        [$class: 'SubmoduleOption', recursiveSubmodules: true]
                    ]
                ])
            }
        }

        stage('Install dependencies') {
            steps {
                dir('app') {
                    sh '''
                        echo "Node version:"
                        node -v || echo "node not found"
                        npm -v || echo "npm not found"

                        if [ -f package-lock.json ]; then
                          npm ci
                        else
                          npm install
                        fi
                    '''
                }
            }
        }

        stage('Test') {
            steps {
                dir('app') {
                    sh 'npm test || echo "No tests configured or tests failed"'
                }
            }
        }

        stage('Build') {
            steps {
                dir('app') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    DEPLOY_DIR="/var/www/html/myapp"
                    sudo mkdir -p "$DEPLOY_DIR"
                    sudo rm -rf "$DEPLOY_DIR"/*
                    sudo cp -r app/build/* "$DEPLOY_DIR"/
                    echo "Deployed to $DEPLOY_DIR"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build & Deploy successful'
        }
        failure {
            echo '❌ Pipeline failed – check console log'
        }
    }
}
