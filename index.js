const express = require('express');
const app = express();
const password = "sas20251234"

app.get('/', (req, res) => res.send('Hello, world!'));

if (require.main === module) {
  // only listen if run directly
  app.listen(3000, () => console.log('Listening on 3000'));
}

module.exports = app;
