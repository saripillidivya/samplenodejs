const express = require('express')
const app = express()
const PORT = 4040

app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.listen(PORT, () =>{
    console.log('successfully running on port', PORT)
})