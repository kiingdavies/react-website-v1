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
                bat "del -rf /var/www/jenkins-react-app"
                bat "cp -r C:\Users\dejidavies\AppData\Local\Jenkins\.jenkins\workspace\jenkins-react-app\build\ /var/www/jenkins-react-app/"
            }
        }
    }
}