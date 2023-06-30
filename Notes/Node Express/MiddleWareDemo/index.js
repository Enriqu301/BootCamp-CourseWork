const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000



app.get('/', (req, res, next)=>{
    res.send("Root Route")
    // req.doggy =  "snore";
    //Short hand way of a quick function
    req.doggy = () => "drool";
    next();
})

const likesCats = (req, res,next)=>{
    console.log("yummy")
    req.animal = "elephants"
    return next()
}


app.get('/dog', likesCats, (req, res)=> {
    console.log(req.animal==="cat" ? "Yummy" : "Gross")
    res.send("I am the second root")
})

app.get('/cat', likesCats, (req, res)=> {
    res.send.json(req.animal.length)
})




//Listener
app.listen(PORT, ()=>console.log(`EJS form app on port ${PORT}`))