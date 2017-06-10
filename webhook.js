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

    console.log('[LOG] request received');
    res.status(400).set('Content-Type', 'application/json');

    let jsonString = JSON.stringify(req.body);
    let hash = "sha1=" + crypto.createHmac('sha1', secret).update(jsonString).digest('hex');

    if (hash != req.get('x-hub-signature')) {
        console.log('[ERROR] invalid key');
        let data = JSON.stringify({ "error": "invalid key", key: hash });
        return res.end(data);
    }

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