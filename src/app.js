const express = require ("express");
const app = express();

const path = require ("path");


app.listen(process.env.PORT || 3000, ()=>console.log("levantando puerto 3000"));

app.get("/", (req, res)=> res.send("Bienvenidos"));

app.get("/mercadoLiebre", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/home.html")));
app.get("/formAccount", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/formAccount.html")));
app.get("/login", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/login.html")));
app.get("/homecopy", (req, res)=> res.sendFile(path.resolve(__dirname, "./views/homecopy.html")));

app.use(express.static("./src/public/imagenes")); 
app.use(express.static("./src/public/css"));