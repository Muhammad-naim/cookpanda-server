const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000
const chefData = require('./data/chefs.json')
const itemsData = require('./data/foodItems.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('server is running')
})
app.get('/chefs', (req, res) => {
    res.send(chefData)
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefData.find(item => item.id == id)
    res.send(chef)
})
app.get('/items',(req, res) => {
    res.send(itemsData)
})
app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = itemsData.find(item => item.foodID == id)
    res.send(item)
})

app.listen(port, () => {
    console.log(`port is running on port ${port}`);
})