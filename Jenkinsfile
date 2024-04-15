pipeline {
    agent { docker { image 'node:20.11.1-alpine3.19' } }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js, Prettier, and ESLint
                    nodejs(nodeJSInstallationName: 'NodeJS') {
                        sh 'npm install -g prettier eslint'
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

        stage('Run ESLint') {
            steps {
                script {
                    // Run ESLint to check code for linting issues
                    sh 'eslint src'
                }
            }
        }
    }

}
