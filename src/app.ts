import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes'

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use('/', routes)

// app.use((err, res) => res
//   .status(err.status || 500)
//   .json(err.data || { message: 'Internal server error' }))

export default app
