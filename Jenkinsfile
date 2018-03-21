pipeline {
  agent {
    node {
      label 'NodeJS'
    }
    
  }
  stages {
    stage('Pre-Build') {
      steps {
        echo 'Executing Pre-Build Stage'
        sh '''node -v
npm -v
npm prune
npm install'''
      }
    }
  }
}