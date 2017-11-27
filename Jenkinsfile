node {
  def param1 = 'halo'

  stage('Build') {
    echo param1
    echo 'Clone from git'
    bat 'cd \\'
    bat 'pwd'
    bat 'cd .\\Indra\\ISENGLAGI'
    bat 'pwd'
  }
  stage('Test') {
    echo 'Testing..'
  }
  stage('Deploy') {
    echo 'Deploying....'
  }
}