@Library('jenkins-shared-library')_
pipeline {
    agent any
    environment {
	VERSIONNPM = ""
    }
    stages {
        stage('Bumb Version') {
            steps {
                script{
                    bumpVersion("main", null)
                }
            }
        }
        stage('Build Application') {
            steps {
                script{
                    buildArtifact()
                }

            }
        }
        stage('Build/Push Application Docker Image') {
            steps {
                script{
                    buildDockerImage("talat345/time-sheet-front")
                }

            }
        }

    }
   
}

