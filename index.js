//Dependencies
const Express = require("express")
const Path = require("path")
const Fs = require("fs")

//Variables
const Port = process.env.PORT || 8080
const Web = Express()

//Main
Web.use(Express.static(Path.resolve(__dirname, "public")), function(req, res, next){
    if(req.path == "/home"){
        res.sendfile("./public/index.html")
    }else if(req.path == "/database"){
        res.sendfile("./public/pages/database.html")
    }else if(req.path == "/api/database"){
        res.json(JSON.parse(Fs.readFileSync("./database/self.json", "utf8")))
    }else{
        next()
        // res.sendfile("./public/pages/404.html")
    }
})

Web.listen(Port, ()=>{
    console.log(`Server is running in port ${Port}`)
})