pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
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
                script {
                    "bat docker build -t csi402-app-image"
                }
            }
        }
    }
}