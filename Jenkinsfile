podTemplate(
  label: 'zenbuild', 
  inheritFrom: 'default',
  containers: [
    containerTemplate(name: 'node-builder', image: 'node:6-alpine', command: 'cat', ttyEnabled: true)
  ])
{
  node ('zenbuild') {
    stages {
      stage ('Checkout') {
        checkout scm
      }
      
      stage('Build') {
        container('node-builder') {
          steps {
            sh 'npm install'
          }
        }
      }
    }
  }
}
