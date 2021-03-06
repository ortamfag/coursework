const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const portfolioRoutes = require('./routes/portfolio.js')
const authRouter = require('./routes/authRouter.js')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'img')))
app.use(express.static(path.join(__dirname, 'js')))
app.use(express.json())

app.use(portfolioRoutes)
app.use(authRouter)

async function start() {
    try{
        await mongoose.connect(
            'mongodb+srv://ortamfag:1QAZxsw23edc@portfolio.7ks7u.mongodb.net/portfolio',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            }
        )
        app.listen(PORT, () => {
            console.log("Server has been started...")
        })
    } catch(e){
        console.log(e)
    }
}

start()