pipeline {
  agent none

  stages {
    stage('Build') {
      steps {
        echo 'Clone from git'
        bat 'cd \\'
        echo '%cd%'
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