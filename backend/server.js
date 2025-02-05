import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongobd.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './Routes/userRoute.js'
import productRouter from './Routes/productRoute.js'

// App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log('Server started on PORT : '+ port)
)