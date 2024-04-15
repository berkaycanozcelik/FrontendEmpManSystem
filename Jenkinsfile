pipeline {
    agent any

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
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
