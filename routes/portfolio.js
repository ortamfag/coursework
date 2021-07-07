const { Router } = require('express')
const Portfolio = require('../models/Portfolio')
const Laboratory = require('../models/Laboratory')
//const curator = require('../models/Curator')
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

router.post('/create', async (req, res) => {
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

router.get('/laboratory', async (req, res) => {
    const laboratories = await Laboratory.find({}).lean()

    res.render('laboratory', {
        title: 'Laboratory',
        laboratories
    })
})

router.post('/laboratory', async (req, res) => {
    const laboratory = new Laboratory({
        title: req.body.title,
        faculty: req.body.faculty,
        number: req.body.number,
        curators: req.body.curators
    })

    await laboratory.save()
    res.redirect('/')
})



module.exports = router