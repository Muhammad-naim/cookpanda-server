const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('cookpanda is running')
})

app.listen(port, () => {
    console.log(`port is running on port ${port}`);
})