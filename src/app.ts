import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'reflect-metadata'

import routes from './routes'

import './components/database'

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use('/', routes)

export default app
