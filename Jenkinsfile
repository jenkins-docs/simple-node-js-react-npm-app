pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-24'
    }
    
    environment {
        CI = 'true'
        NODE_ENV = 'test'
    }
    
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
        timestamps()
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh '''
                    node --version
                    npm --version
                    npm ci
                '''
            }
        }
        
        stage('Code Quality & Security') {
            parallel {
                stage('Lint') {
                    steps {
                        echo 'Running ESLint...'
                        sh 'npm run lint || true'
                    }
                }
                stage('Security Audit') {
                    steps {
                        echo 'Running security audit...'
                        sh 'npm audit --audit-level moderate || true'
                    }
                }
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh '''
                    # Run tests with coverage
                    npm test -- --coverage --watchAll=false --testResultsProcessor=jest-junit
                '''
            }
            post {
                always {
                    // Publish test results
                    publishTestResults testResultsPattern: 'junit.xml'
                    // Publish coverage reports
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage/lcov-report',
                        reportFiles: 'index.html',
                        reportName: 'Coverage Report'
                    ])
                }
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'npm run build'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'build/**/*', allowEmptyArchive: true
                }
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed'
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
