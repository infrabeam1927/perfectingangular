var express = require('express');
var app = express();

// Serve static files from the current directory
app.use('/', express.static('./'));

// Start the server on port 80
app.listen(80, () => {
    console.log('Server is running on http://localhost:80');
})
