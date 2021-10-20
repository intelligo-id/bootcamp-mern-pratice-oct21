const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('ini get ya');
// });
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('ini post ' + req.body.username);
});
// app.put('/', (req, res) => {
//   res.send('ini put');
// });
// app.delete('/', (req, res) => {
//   res.send('ini delete');
// });

// app.all('/', (req, res) => {
//   res.send('ini ' + req.method);
// });

app.use(router);

app.use((req, res, next) => {
  res.status(404).send('resource tidak ditemukan');
});

app.listen(
  port,
  console.log(`Server running at
http://localhost:${port}`)
);
