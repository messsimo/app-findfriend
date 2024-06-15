const express = require("express")
const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))
app.use(express.static("src"))



app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/user/:username", (req, res) => {
    res.render("user", {username: req.params.username,
        hobby: ["Бег", "Плавание", "Бильярд"]
    })
})

app.post("/check-user", (req, res) => {
    var username = req.body.username
    if (username == "")
        res.redirect("/")
    else 
        res.redirect("/user/" + username)

})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Сервер запущен по ссылке - http://localhost:${PORT}`)
})