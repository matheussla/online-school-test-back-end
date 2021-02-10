import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'reflect-metadata'
import setupSwagger from './config/swagger'

import routes from './routes'

import './components/database'

const app = express()

setupSwagger(app)

app.use(cors())

app.use(bodyParser.json())

app.use('/', routes)

// app.use((error: Error, response: Response): response => {

//   return response
//     .status(500)
//     .json({ status: 'error', message: 'Internal server error' });
// });


export default app
