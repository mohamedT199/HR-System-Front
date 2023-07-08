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
                    bumpVersion()
                }
            }
        }
        stage('Build Application') {
            steps {
                script{
                    buildArtifact(false,"main")
                }

            }
        }
    }
    post {
        failure {
            echo 'Build Sucess'
        }
        success {
	    script{
	    	env.VERSIONNPM = sh(returnStdout: true, script: "node -p \"require(\'./package.json\').version\"")
            	echo "${env.VERSIONNPM}"
	    	sh "git tag -d ${env.VERSIONNPM}"
	    }
        }
    }
   
}

