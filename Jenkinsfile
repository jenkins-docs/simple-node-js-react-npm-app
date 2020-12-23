podTemplate(
  label: 'zenbuild', 
  inheritFrom: 'default',
  containers: [
    containerTemplate(name: 'node-builder', image: 'alexsuch/angular-cli:1.6.1', command: 'cat', ttyEnabled: true)
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
