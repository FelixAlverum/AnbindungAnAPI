// Hier wird der Server definiert
	
// index.js
const express = require('express');     // Externe Pakete laden
const app = express();                  // Externes Paket mit dem Namen "Express" mit HTTP Methoden
 
// Neue Variablen anlegen
const todos = require('./todos.json');   // in der todos.json Datei in Zeile 7 "start": "nodemon.json", hinzufügen

app.use(express.static('public'));
app.use(express.json);

// HTTP GET Methode
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) =>{
    cons.log(req.body);
});
  
app.listen(3000);