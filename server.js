const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const app = express();

app.use(express.json());

// const db = require('./config/keys').mongoURI;

const db = config.get('mongoURI');

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/api/items', require('./routes/api/Items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on Port ${port}`));