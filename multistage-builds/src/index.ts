import express from 'express';


const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello From Express!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
} )