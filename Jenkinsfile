pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                bat "npm install"
                bat "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                bat "del /f /q /var/www/jenkins-react-app"
                bat "cp -r ${WORKSPACE}\build\ /var/www/jenkins-react-app/"
            }
        }
    }
}