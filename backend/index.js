const express = require('express')

const app = express()

// Settings
app.set("port", 9096)

//Routes

app.listen(app.get("port"), ()=>{
    console.log(`Server Ejecutado en el puerto ${app.get("port")}`)
})