#!/usr/bin/env groovy

pipeline {
  agent { label 'web' }
  stages {
    stage('Build') {
      steps {
        sh "env"
        script { 
          if (env.BRANCH_NAME.startsWith("PR-")) {
            env.BUILD_INFO = "<${env.RUN_DISPLAY_URL}|${env.JOB_NAME} [${env.BUILD_NUMBER}]> submitted by ${env.CHANGE_AUTHOR} with PR <https://github.com/juji-io/site/pull/${CHANGE_ID}|#${env.CHANGE_ID}>: ${env.CHANGE_TITLE}"
          } else {
            env.GIT_COMMIT_MSG = sh (
              script: "git log --format=%B -n 1 ${env.GIT_COMMIT} | head -n 1",
              returnStdout: true).trim() 
            env.GIT_AUTHOR_NAME = sh ( 
              script: "git show -s --pretty=%an ${env.GIT_COMMIT}",
              returnStdout: true).trim() 
            env.BUILD_INFO = "<${env.RUN_DISPLAY_URL}|${env.JOB_NAME} [${env.BUILD_NUMBER}]> submitted by ${env.GIT_AUTHOR_NAME} with commit <https://github.com/juji-io/site/commit/${env.GIT_COMMIT}|${env.GIT_COMMIT.take(7)}>: ${env.GIT_COMMIT_MSG}"
          }
        }
        sh '''
          npm install 
          npx @11ty/eleventy
        '''
      }
    }
  }
  post {
    success {
      script { 
        if (env.BRANCH_NAME.startsWith("PR-")) {
          sh '''
            curl "https://api.github.com/repos/juji-io/site/statuses/${GIT_COMMIT}" -H "Content-Type: application/json" -X POST -d "{\"state\": \"success\", \"context\": \"continuous-integration/jenkins/preview-deploy\", \"description\": \"Site preview deployment\", \"target_url\": \"https://${BRANCH_NAME}.juji-inc.com/\"}" 
          '''
          }
      }
      slackSend (color: '#00FF00', message: "SUCCESSFUL: Job ${env.BUILD_INFO}")
    }
    aborted {
      slackSend (color: '#FF00FF', message: "ABORTED: Job ${env.BUILD_INFO}")
    }
    notBuilt {
      slackSend (color: '#AAAAAA', message: "NOT_BUILT: Job ${env.BUILD_INFO}")
    }
    unstable {
      slackSend (color: '#FFFF00', message: "UNSTABLE: Job ${env.BUILD_INFO}")
    }
  }
}

