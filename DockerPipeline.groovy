pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_CREDENTIALS = 'docker-registry-credentials'
        MONGO_USERNAME = 'ati'
        MONGO_PASSWORD = 'ati1234'
    }

    stages {
        stage('Pull Docker Images') {
            agent { label 'master' }
            steps {
                script {
                    docker.image('postgres:latest').pull()
                    docker.image('redis:latest').pull()
                    docker.image('mongo:latest').pull()
                    docker.image('mongo-express:latest').pull()
                }
            }
        }
        stage('Run Containers') {
            agent { label 'master' }
            steps {
                script {
                    docker.image('postgres:latest').run('-d --name postgres-container')
                    docker.image('redis:latest').run('-d --name redis-container')
                    docker.image('mongo:latest').run("-d --name mongodb-container -e MONGO_INITDB_ROOT_USERNAME=${env.MONGO_USERNAME} -e MONGO_INITDB_ROOT_PASSWORD=${env.MONGO_PASSWORD}")
                    docker.image('mongo-express:latest').run("-d --name mongo-express-container -e ME_CONFIG_MONGODB_ADMINUSERNAME=${env.MONGO_USERNAME} -e ME_CONFIG_MONGODB_ADMINPASSWORD=${env.MONGO_PASSWORD} --link mongodb-container:mongo")
                }
            }
        }
    }

    post {
        success {
            echo 'Containers are running successfully'
        }
    }
}
