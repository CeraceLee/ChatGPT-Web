pipeline {
    agent any
    environment {
        CODE          = credentials('ACCESS_CODE')
        API_KEY       = credentials('API_KEY')
        BASE_URL      = credentials('BASE_URL')
        CUSTOM_MODELS = credentials('CUSTOM_MODELS')
        DOCKER_HOST   = credentials('DOCKER_HOST') 
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                docker.build "chatgpt-webui:latest"
                docker.withServer("$DOCKER_HOST") {
                    sh 'docker build -t chatgpt-webui:latest .'
                    sh 'docker rmi $(docker images -f "dangling=true" -q)'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                docker.withServer("$DOCKER_HOST") {
                    sh 'docker images'
                    sh 'docker ps -aux'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
                docker.withServer("$DOCKER_HOST") {
                    sh 'docker stop chatgpt-webui-container'
                    sh """
                        docker run -d \
                            --name chatgpt-webui-container \
                            --restart=always \
                            -p 3000:3000 \
                            -e CODE="${CODE}" \
                            -e OPENAI_API_KEY="${API_KEY}" \
                            -e BASE_URL="${BASE_URL}" \
                            -e ANTHROPIC_API_KEY="${API_KEY}" \
                            -e ANTHROPIC_URL="${BASE_URL}" \
                            -e CUSTOM_MODELS="${CUSTOM_MODELS}" \
                            -e HIDE_USER_API_KEY="1" \
                            chatgpt-webui:latest
                    """
                }
            }
        }
    }
}
