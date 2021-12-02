

const express = require("express");



const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));




app.get('/', (req, res) => {
    res.send('Anasayfa')
})

app.get('/about', (req, res) => {
    res.send('Ben İlhan')
})

app.get('/contact', (req, res) => {
    res.send(' icitwd on github')
})

app.get("/sehir", function(req, res){

    res.sendFile(__dirname + "/index.html");
    
    
    });


app.listen(2000, function() {
  console.log("Server started on port 3000");
});
