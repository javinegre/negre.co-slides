const express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/git-history', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/slides/git-history.html'));
});

app.get('/git-merge-vs-rebase', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/slides/git-merge-vs-rebase.html'));
});

app.get('/', (req, res) => {
  res.redirect(301, 'http://negre.co#slides');
});

app.get('*', (req, res) => {
  res.redirect(404, 'http://negre.co');
});

module.exports = app;