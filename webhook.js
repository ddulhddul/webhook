let express = require('express')
let spawn = require('child_process').spawn
let app = express()
app.set('view engine', 'jade')

let secret = "secrererereret"; let port = 4000;

app.post('/webhook',(req,res)=>{
    
    console.log('webhook inininininin')

    let deploySh = spawn('sh', ['hook.sh']);
    deploySh.stdout.on('data', (data)=>{
        let buff = new Buffer(data);
        console.log(buff.toString('utf-8'));
    })

    res.render('index', {param:req})
})

app.listen(4000, ()=>{
    console.log('4000 port connected...')
})