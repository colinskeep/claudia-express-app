## PreReq
AWS CLI should be preconfigured
Install claudia
`npm install -g claudia`

## Deployment
Clone repository
`claudia generate-serverless-express-proxy --express-module api`
`claudia create --handler lambda.handler --deploy-proxy-api --region us-west-1`

## Making Changes
`claudia update`
