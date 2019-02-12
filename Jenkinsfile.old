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
		withCredentials([usernamePassword(credentialsId: 'IlyaWw', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
		  // available as an env variable, but will be masked if you try to print it out any which way
		  // note: single quotes prevent Groovy interpolation; expansion is by Bourne Shell, which is what you want
		  sh 'echo $PASSWORD'
		  // also available as a Groovy variable
		  echo USERNAME
		  // or inside double quotes for string interpolation
		  echo "username is $USERNAME"
		}
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
