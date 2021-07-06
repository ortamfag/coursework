const { Router } = require('express')
const Portfolio = require('../models/Portfolio')
const router = Router()

router.get('/', async (req,res) => {
    const portfolios = await Portfolio.find({}).lean()

    res.render('index',{
        title:'PolyPortfolio',
        isIndex: true,
        portfolios
    })
})



module.exports = router