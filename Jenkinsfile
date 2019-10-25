pipeline {
  environment {
    registry = "gaikwadamolraj/pet-store-express-service"
    registryCredential = 'dockerhub'
    dockerImage = ''
    appName = 'pet-store'
  }
  agent any
  stages {
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Build') {
       steps {
         sh 'npm test'
       }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    /*stage('Delete prev app') {
        steps {
            sh "helm del --purge aceme"
        }
    }*/
    /*stage('Deploy to KUBERENTES') {
        steps {
            sh "export BUILD_NUMBER=${BUILD_NUMBER}"
            sh "helm upgrade pet-store ${pwd()}/aceme --set image.tag=${BUILD_NUMBER}"
        }
    }*/
  }
}
