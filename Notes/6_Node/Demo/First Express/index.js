//FOUNDATIONS
const express = require ('express')
const app = express()

//ROUTE HANDLERS
app.get('/',(request, response)=>{              // request and response can be renamed to anything. no matter what they are always request and response depsite their name. 
    response.send("FIRST SERVER")               // .send is to send back info to the client after the client requested a response. 
})

//LISTENER
app.listen(3000,()=> console.log(`App Listening on port 3000`)) //use back ticks on app listening for some reason ITS IMPORTANT 