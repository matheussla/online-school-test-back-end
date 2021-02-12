import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'reflect-metadata'
import setupSwagger from './config/swagger'

import routes from './routes'

import './database'

const app = express()

setupSwagger(app)

app.use(cors())

app.use(bodyParser.json())

app.use('/', routes)

export default app
