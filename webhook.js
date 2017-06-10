let express = require('express')
let crypto = require('crypto')
let bodyParser = require('body-parser')
let spawn = require('child_process').spawn
let app = express()
app.use(bodyParser.json());
app.set('view engine', 'jade')

let secret = "secrererereret";

app.post('/webhook',(req,res)=>{
    
    console.log('webhook inininininin')

    let deploySh = spawn('sh', ['hook.sh']);
    deploySh.stdout.on('data', (data)=>{
        let buff = new Buffer(data);
        console.log(buff.toString('utf-8'));
    })

    let data = JSON.stringify({ "success": true });
    return res.status(200).end(data);
})

app.listen(4000, ()=>{
    console.log('4000 port connected...')
})