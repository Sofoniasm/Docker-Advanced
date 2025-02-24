const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`Hello From ${process.env.APP_NAME}!`);

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});