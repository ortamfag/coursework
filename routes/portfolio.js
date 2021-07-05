const { Router } = require('express')
//const Portfolio = require('../models/Portfolio)
const router = Router()

router.get('/', async (req,res) => {
    //const todos = await Todo.find({}).lean()

    res.render('index',{
        title:'PolyPortfolio',
        isIndex: true,
        //todos
    })
})

module.exports = router