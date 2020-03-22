const express = require('express');
const hbs = require('express-handlebars');
const app = express();

const game = require('./server/game');

const PORT = 3000;

app.use(express.static('public'));

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'index',
  layoutsDir: __dirname + '/views/',
}));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
  let data = {
    title: 'Fischer Random Chess'
  }
  res.render('rooms.hbs', data);
});

app.get('/game/:gameId', function(req, res, next) {
  if (req.params.gameId == 12) {
    let data = game.getGameData(req.params.gameId);
    if (data) {
      res.render('game.hbs', data);
    }
  }
  else {
    next();
  }
});

app.get('/*', function(req, res) {
  res.sendStatus(404);
});

app.listen(PORT, function() {
  console.log('Application listening on port ' + PORT);
});
