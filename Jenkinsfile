pipeline {
    agent { docker { image 'node:20.11.1-alpine3.19' } }
stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js and Prettier
                    nodejs(nodeJSInstallationName: 'NodeJS') {
                        sh 'npm install -g prettier'
                    }
                }
            }
        }

        stage('Run Prettier') {
            steps {
                script {
                    // Run Prettier to format code
                    sh 'prettier --write "src/**/*.js"'
                }
            }
        }
    }

}
