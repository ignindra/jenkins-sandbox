node {
  def param1 = 'halo'

  stage('Build') {
    echo param1
    echo 'Clone from git'
    bat 'cd \\'
    bat 'dir'
    bat 'cd .\\Indra\\ISENGLAGI'
    bat 'dir'
  }
  stage('Test') {
    echo 'Testing..'
  }
  stage('Deploy') {
    echo 'Deploying....'
  }
}