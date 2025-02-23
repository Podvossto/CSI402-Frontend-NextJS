pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Clone Code the project From Git"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        credentialsId: 'Pitchaya22894',
                        url: 'https://github.com/Podvossto/CSI402-Frontend-NextJS.git'
                    ]]
                ])
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                script {
                    docker.build("csi402-app-image")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                echo "Running the application inside Docker container..."
                script {
                    docker.image("csi402-app-image").inside {
                        sh 'yarn dev'
                    }
                }
            }
        }

        stage('Unit Tests') {
            steps {
                echo "Running tests inside Docker container..."
                script {
                    docker.image("csi402-app-image").inside {
                        sh 'yarn test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application..."
                // Add deployment commands here if needed
            }
        }

        stage('Deployment test') {
            steps {
                echo "Running deployment tests..."
                // Add commands to test deployment if needed
            }
        }
    }

    post {
        always {
            // Clean up the Docker image after the build
            echo "Cleaning up Docker image..."
            docker.image("csi402-app-image").remove()
        }
    }
}
