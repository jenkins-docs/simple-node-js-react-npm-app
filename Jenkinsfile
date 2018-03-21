pipeline {
  agent {
    node {
      label 'master'
    }
    
  }
  stages {
    stage('Pre-Build') {
      steps {
        echo 'Executing Pre-Build Stage'
        sh '''npm -v
npm prune
npm install
npm install gulpjs/gulp#4.0 -g'''
      }
    }
    stage('Build') {
      steps {
        echo 'Executing Build Stage'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        echo 'Executing Test Stage'
        sh 'npm run test'
      }
    }
  }
}