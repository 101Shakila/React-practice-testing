const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3001, function () {
    console.log('App started on port 3001');
});
