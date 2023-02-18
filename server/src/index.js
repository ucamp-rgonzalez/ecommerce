const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = 4000;

app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.json({
        status: 200,
        message: "Hola"
    })
})

app.listen(+port, () => {
    console.log(`Server listen port ${port}`)
})