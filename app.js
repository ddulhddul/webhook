let express = require('express')
let app = express()
app.set('view engine', 'jade')

app.get('/',(req,res)=>{
    // console.log('req', req)
    res.render('index')
})

app.post('/webhook',(req,res)=>{

    console.log('req', req)
    res.render('index', {param:req})
})

app.listen(4000, ()=>{
    console.log('4000 port connected...')
})