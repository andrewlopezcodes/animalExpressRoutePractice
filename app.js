const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello, Welcome to my assignment'));

app.get('/speak/:id', function(req, res){
  let urlId = req.params.id;
  let sound;
  if(urlId === 'pig'){
    sound = 'says Oink';
  } else if (urlId === 'cow'){
    sound = 'says Moo';
  } else if(urlId === 'dog'){
    sound = 'says Woof Woof';
  } else{
    sound = "I don't know what sound this animal makes";
  }
  res.send(`The ${urlId} ${sound}`)
});

app.get('/repeat/:word/:num', function(req, res){
  let word = req.params.word;
  let num = req.params.num;
  let holder = [];

  for(let a = 0; a < num; a++){
    holder.push(word)
  }
  // holder.toString().replace(/,/g, ' '); --- removes the commas and replaces them with a space after turning the array to a string with the toString method. 
 
  let output = holder.toString().replace(/,/g, ' ');
  
  res.send(output);
});

//code written by @andrewlopezcodes on Github

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));