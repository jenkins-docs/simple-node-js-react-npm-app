podTemplate(
  label: 'jenkins-pipeline', 
  inheritFrom: 'default',
  containers: [
    containerTemplate(name: 'node-builder', image: 'alexsuch/angular-cli:1.6.1', command: 'cat', ttyEnabled: true)
  ])
{
  node ('jenkins-pipeline')
  {
    stage ('CHECKOUT FROM REPO') {
      checkout scm
    }
  }
}
