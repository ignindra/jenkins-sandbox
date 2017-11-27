node {
  def param1 = 'halo'

  stage('Build') {
    echo param1
    echo 'Clone from git'
    bat 'cd \\'
    bat 'echo %cd%'
    bat 'cd .\\Indra\\ISENGLAGI'
    bat 'echo %cd%'
  }
  stage('Test') {
    echo 'Testing..'
  }
  stage('Deploy') {
    echo 'Deploying....'
  }
}