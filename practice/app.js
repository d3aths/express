const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const _ = require('lodash')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home', {
        startingContent: homeStartingContent,
        posts: posts
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        aboutContent: aboutContent
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        contactContent: contactContent
    })
})

app.get('/write', (req, res) => {
    res.render('write')
})

let posts = []

app.post('/write', (req, res) => {
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
    }
    posts.push(post)
    res.redirect('/')
})