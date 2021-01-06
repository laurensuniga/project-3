const express = require('express');
const logger = require('morgan');


require('dotenv').config();
require('./config/database');

const app = express();

app.use(express.json());
app.use(logger('dev'));

// app.use(corse());  => will still need to install this later


// app.use('/api/users', require('./routes/api/users'));  // can put an in-line require statement

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express is listening on port ${port}`);
});

