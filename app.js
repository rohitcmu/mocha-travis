const port = process.env.PORT || 4000;
const app = require('./server.js');

app.listen(port, () => { 
  console.log('Listening on port:' + port)
});