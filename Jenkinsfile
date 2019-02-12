pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
	stage('Input') {
	    steps {
		script {
		       	def db_name = input (
		            message: 'Input DB name: ',
		            ok: 'Submit',
			    parameters: [string(defaultValue: '', description: '.....', name: 'DB')]
		        )
			def username = input (
                            message: 'Input username: ',
                            ok: 'Submit',
			    parameters: [string(defaultValue: '', description: '.....', name: 'USERNAME')]
                        )
			def password = input (
                            message: 'Input password: ',
                            ok: 'Submit',
			    parameters: [string(defaultValue: '', description: '.....', name: 'PASSWORD')]
                        )
		        echo ("DB: " + db_name + " username: " + username + " password: " + password)
		}
	    }
	}
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    	stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
	}
	stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
