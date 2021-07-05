const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const portfolioRoutes = require('./routes/portfolio')

const PORT = process.env.PORT || 3000