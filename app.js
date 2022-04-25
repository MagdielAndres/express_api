// Usando objeot express
const express = require('express')

// App de express
const app = express()
app.use(express.json()) // indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app : localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/',(req, res) => {
    res.send('Bienvenidos a launchx')
})

// GET Crea un endpoint que regrese una lista de explorers
// Utiliza el método GET de express para este endpoint
// Crea algunos objetos y regresa la lista como se indica.
// Agrega el código HTTP CODE 200 en el request:

//ESTO ES UN ENDPOITN
// HTTP METHODS: GET, POST, PULL, DELETE
app.get('/v1/explorers',(req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorers1 = { id:1, name: "Magdiel1"}
    const explorers2 = { id:2, name: "Magdiel2"}
    const explorers3 = { id:3, name: "Magdiel3"}
    const explorers4 = { id:4, name: "Magdiel4"}
    const explorers = [explorers1, explorers2, explorers3, explorers4]
    // HTPP CODE STATUS: 200 (OK)
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id',(req, res) => {
    console.log(`Api BY ID  Explorers V1 API ${new Date()}`)
    const explorers1 = { id:1, name: "Magdiel1"}
    
    // HTPP CODE STATUS: 200 (OK)
    res.status(200).json(explorers1)
})