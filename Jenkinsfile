pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                bat "sudo npm install"
                bat "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                bat "sudo rm -rf /var/www/jenkins-react-app"
                bat "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}