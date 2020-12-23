pipeline {
  agent {
    kubernetes {
      containerTemplate {
        name 'nodejs'
        image 'node:12.18.3'
      }

    }

  }
  stages {
    stage('NPM Version Check') {
      steps {
        container('nodejs') {
          sh 'node --version'
        }
      }
    }

  }
}
