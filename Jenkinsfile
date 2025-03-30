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
                    bat 'docker build -t csi402-app-image .'
                    bat 'docker run -d --name csi-container -p 54100:3000 csi402-app-image:latest'
                }
            }
        }

        stage('Test Stage') {
            steps {
                checkout([
                            $class: 'GitSCM',
                            branches: [[name: '*/main']],
                            userRemoteConfigs: [[
                                credentialsId: 'Pitchaya22894',
                                url: 'https://github.com/Podvossto/AutomateTestingFrontend.git'
                            ]]
                        ])
                script {
                    bat 'pip install robotframework robotframework-seleniumlibrary robotframework-requests'
                    bat 'robot test.robot'
                }
            }
        }
    }
}
