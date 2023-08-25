const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());       
app.use(express.urlencoded({     
  extended: true
}));


app.post('/', (req,res) => {
  const data = {
    name : req.body.textInput,
  }
  res.status(204).send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));