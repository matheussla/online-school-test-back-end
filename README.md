# online-school-test-back-end

## How to run: env local
 - create .env using exampleLocal.env

 - docker-compose up

 - npm i 
 
 - npm run build 

 - npm run typeorm migration:run

 - npm run dev:server
 
 - npm run test
 
## How to run: env dev
 - create .env using exampleDev.env

 - npm i 
 
 - npm run build 

 - npm run dev:server
 
 - npm run test 
 
## Models:

 - Exams

 - Questions

 - Options

## Functionalities:

 - Create Exams, Questions and Options

 - One exam have many questions and many questions have many options

 - To create questions need one exam id to param exam_id in question

 - To create options need one question id to param question_id in option
 
 ## Api Documentation:
 
 - http://localhost:3000/api-docs
