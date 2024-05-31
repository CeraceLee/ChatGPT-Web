pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker build -t chatgpt-webui:latest .'
                sh 'docker rmi $(docker images -f "dangling=true" -q)'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'docker images'
                sh 'docker ps -aux'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
                withCredentials([
                    string(credentialsId: 'ACCESS_CODE', variable: 'CODE'),
                    string(credentialsId: 'API_KEY', variable: 'API_KEY'),
                    string(credentialsId: 'BASE_URL', variable: 'BASE_URL'),
                    string(credentialsId: 'CUSTOM_MODELS', variable: 'CUSTOM_MODELS')
                ]) {
                    sh 'docker stop chatgpt-webui-container'
                    sh """
                        docker run -d \
                            --name chatgpt-webui-container \
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
