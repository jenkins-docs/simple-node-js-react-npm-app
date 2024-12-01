pipeline {
    agent any
    environment {
        IMAGE_NAME = "mz-react-todo"
        IMAGE_TAG = "latest"
        NEXUS_URL = "nginx-nexus.connectme365.com/hosted"
        DOCKER_SWARM_MANAGER = "jenkins@10.3.31.84"
        NEXUS_CREDENTIALS_ID = "jenkins-mz-rd"
        SSH_CREDENTIALS_ID = "publish_via_ssh"
    }
    stages {
        stage('Clone Repo'){
            steps{
                echo "Clean the workspace"
                deleteDir()
                echo "Cloning source code ..."
                git branch: 'master', credentialsId: 'systemservices-github', url: 'git@github.com:mcl-michaelz/simple-node-js-react-npm-app.git'
            }
        }
        stage('Build App'){
            agent {
                docker {
                    image 'node:16'
                    args '-u root'
                    // Run the container on the node specified at the
                    // top-level of the Pipeline, in the same workspace,
                    // rather than on a new node entirely:
                    reuseNode true
                }
            }
            steps {
                echo "Building React App ..."
                sh '''
                    pwd & ls -l
                    npm install
                    npm run build
                '''
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh '''
                    docker build -t ${NEXUS_URL}/${IMAGE_NAME}:${IMAGE_TAG} .
                '''
            }
        }
        stage('Push Image to Nexus') {
            steps {
                echo 'Pushing Docker image to Nexus...'
                withCredentials([usernamePassword(credentialsId: "${NEXUS_CREDENTIALS_ID}", usernameVariable: 'NEXUS_USER', passwordVariable: 'NEXUS_PASS')]) {
                    sh '''
                        echo ${NEXUS_PASS} | docker login ${NEXUS_URL} -u ${NEXUS_USER} --password-stdin
                        docker push ${NEXUS_URL}/${IMAGE_NAME}:${IMAGE_TAG}
                    '''
                }
            }
        } 
        stage('Deploy to Docker Swarm') {
            steps {
                echo 'Deploying to Docker Swarm...'
                withCredentials([sshUserPrivateKey(credentialsId: "${SSH_CREDENTIALS_ID}", keyFileVariable: 'PK')]) {
                    sh '''
                        ssh -i $PK -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" ${DOCKER_SWARM_MANAGER} "
                        docker service update --image ${NEXUS_URL}/${IMAGE_NAME}:${IMAGE_TAG} ${IMAGE_NAME} ||
                        docker service create --name ${IMAGE_NAME} --replicas 3 ${NEXUS_URL}/${IMAGE_NAME}:${IMAGE_TAG}"
                    '''
                }
            }
        }
    }
    post {
        always {
        }
        success {
        }
        failure {
            echo 'This will run only if failed'
            mail to: 'michael.zhang@mclarens.co.nz',
                 subject: "Failed pipeline: ${currentBuild.fullDisplayName}",
                 body: "Something is wrong with ${env.BUILD_URL}"
        }
    }
}
