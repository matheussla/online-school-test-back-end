import process from 'process'
import app from './app'

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running at port ${process.env.SERVER_PORT}`)
})
