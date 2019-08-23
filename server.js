const express = require('express');

let app = express();
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
