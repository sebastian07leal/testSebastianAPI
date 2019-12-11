const express = require('express');
const app = express();
const favoritesApi = require('./routes/favorites');

const  { config } = require('./config/index.js');
const { showConsole, hanldeError } = require('./middleware/errors');
const cors = require('cors');

app.use(cors());
app.use(express.json());

favoritesApi(app);

app.use(showConsole);
app.use(hanldeError);

app.listen(config.port, function() {
    console.log(`http://localhost:${config.port}`);
});