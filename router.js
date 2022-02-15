const express = require('express')
const router = express.Router()

router.get('/home',(req,res)=>{
    res.send('This is home')
})

router.get('/shop',(req,res)=>{
    res.send('This is Shop')
})

router.get('/cart',(req,res)=>{
    res.send('This is Cart')
})

router.get('/user',(req,res)=>{
    res.send('This is User ')
})

module.exports = router