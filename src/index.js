import express from 'express'
import cors from 'cors'
import connectDB from './config/db'

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome' })
})

app.get('/login', (req, res) => {
  res.json({ message: 'Sign In page' })
})

const server = app.listen(PORT, () => {
  console.log(`Port is running on ${PORT} go and catch it`)
})

export default app
