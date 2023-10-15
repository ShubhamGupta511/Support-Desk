const express=require('express')
const colors=require('colors')
const dotenv=require('dotenv').config();
const {errorHandler} =require('./middleware/errorMiddleware')
const PORT=process.env.PORT || 8000
const app=express()
const connectDB=require('./config/db')

//Connect to the Database
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.status(200).send({message:'Welcome to the support desk API'})
})

app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))

