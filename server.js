const express = require('express')
const mongoose= require('mongoose');

const articalRouter = require('./routes/articles');
const Article = require('./models/articles');
const methodOverride= require('method-override')
const app =express()

const mongoDb = "mongodb+srv://Avinashkumar:Aman123@cluster0.gzpb0dy.mongodb.net/?retryWrites=true&w=majority"; 
mongoose.connect(mongoDb, {  useNewUrlParser: true, useUnifiedTopology: true
 }); 
// const db = mongoose.connection; 
// db.on("error", console.error.bind(console, "mongo connection error")); 

app.set ('view engine', 'ejs')


app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


app.get('/', async (req,res)=>{
const articles =await Article.find().sort({
    createdAt:'desc'
})
    res.render('articles/index' , {articles : articles})
})

app.use( '/articles',articalRouter)
app.listen(5000)