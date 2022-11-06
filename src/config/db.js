import mongoose from 'mongoose'
let dbString = process.env.MONGO_URL

const connectDB = async () => {
  try {
    const conn = mongoose.connect(dbString)
    console.log(`MongoDB connected`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
