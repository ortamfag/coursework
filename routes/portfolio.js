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

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Portfolio'
    })
})

router.post('/create', async (req,res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        NSP: req.body.NSP,
        group: req.body.group,
        faculty: req.body.faculty,
        curator: req.body.curator,
        laboratory: req.body.laboratory
    })

    await portfolio.save()
    res.redirect('/')
})



module.exports = router