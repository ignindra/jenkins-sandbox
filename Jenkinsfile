pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Clone from git'
        bat 'git clone https://github.com/ignindra/jenkins-sandbox.git C:\\Indra\\ISENGLAGI'
        bat 'npm install'
      }
    }
    stage('Test') {
      steps {
          echo 'Testing..'
          bat 'npm test'
      }
    }
    stage('Deploy') {
      steps {
          echo 'Deploying....'
          bat 'npm start'
      }
    }
  }
}