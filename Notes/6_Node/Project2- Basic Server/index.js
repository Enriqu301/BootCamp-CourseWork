"I was able to build this without looking on my <number> attempt!"


//FOUNDATIONS
const express = require ('express')
const app = express()

//ROUTE HANDLERS
app.get('/', (request, response)=>{
    response.send("Basic Server")
})

//LISTENER
app.listen(3000,()=>console.log(`App Listening on port 3000`))