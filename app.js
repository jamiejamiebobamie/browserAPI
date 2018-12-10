const express = require('express')
const app = express()

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('views/public'));

const port = process.env.PORT || 10000;

 app.get('/', (req, res) => {
     res.render('index');
 });

app.listen(port);
