const express = require('express')
const mongoose= require('mongoose');
const articalRouter = require('./routes/articles')
const app =express()

const mongoDb = "mongodb+srv://Avinashkumar:Aman123@cluster0.gzpb0dy.mongodb.net/?retryWrites=true&w=majority"; 
mongoose.connect(mongoDb, {  useNewUrlParser: true,useUnifiedTopology: true, }); 
// const db = mongoose.connection; 
// db.on("error", console.error.bind(console, "mongo connection error")); 

app.set ('view engine', 'ejs')


app.use(express.urlencoded({extended:false}))



app.get('/', (req,res)=>{
const articles=[{
    title:'Test Article',
    createdAt: new Date(),
    description: 'Test description'
},{
    title:'Test Article 2',
    createdAt: new Date(),
    description: 'Test description 2'
}]

    res.render('articles/index' , {articles : articles})
})

app.use( '/articles',articalRouter)
app.listen(5000)