const express = require('express');
const app = express();
const dataMongo = require('./routes/dataMongo');

const  { config } = require('./config/index.js');
const { showConsole, hanldeError } = require('./middleware/errors');
const cors = require('cors');

app.use(cors());
app.use(express.json());

dataMongo(app);

app.use(showConsole);
app.use(hanldeError);

app.listen(config.port, function() {
    console.log(`http://localhost:${config.port}`);
});