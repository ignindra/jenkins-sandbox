pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Clone from git'
        bat 'npm install --verbose'
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