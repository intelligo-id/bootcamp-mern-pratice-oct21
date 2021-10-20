const express = require('express');
const router = express.Router();

router.get('/blog/:id', (req, res) => {
  res.send('ini blog ' + req.params.id);
});

router.get('/article', (req, res) => {
  console.log(req.query);
  res.send('ini apa ' + req.query.nama);
});

module.exports = router;
