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