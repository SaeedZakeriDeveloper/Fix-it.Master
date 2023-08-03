const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index_fr.html'));
});

const port = 3000; 
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
