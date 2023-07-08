@Library('jenkins-shared-library')_
pipeline {
    agent any
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
        success {
            echo 'Build Sucess'
        }
        failure {
	    version = sh(returnStdout: true, script: 'node -p "require(\'./package.json\').version"')
            echo '${version}'
	    sh "git tag -d ${version}"
        }
    }
   
}

