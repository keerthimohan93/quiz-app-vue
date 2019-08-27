const express = require('express');
const history = require('connect-history-api-fallback');

let app = express();
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});
app.use(history());
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
