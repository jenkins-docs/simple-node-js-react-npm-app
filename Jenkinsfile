pipeline {
    agent {
        docker { image 'node:20.11.1-alpine3.19' }
    }
    stages {
        stage('Build') {
            steps {
                echo "start building now"
            }
        }
        stage('Test') {
            when{ changeset "./jenkins/scripts/*.txt"}
            steps {
                sh 'chmod +x ./deliver.sh'
                 sh 'chmod +x deliver.sh'
                sh './deliver.sh'
            }
         }
        stage('Get Last Commit Details') {
            steps {
                script{
                    List<String> changes = getChangedFilesList()
                    println ("Changed file list: " + changes)
                }
            }
        }
        stage('Deliver') {
            steps {
                echo "done now"
            }
        }
    }
}

@NonCPS
List<String> getChangedFilesList(){
    def changedFiles = []
    for ( changeLogSet in currentBuild.changeSets){
        for (entry in changeLogSet.getItems()){
            changedFiles.addAll(entry.affectedPaths)
        }
    }
    return changedFiles
}
