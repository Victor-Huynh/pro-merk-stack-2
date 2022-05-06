const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(5959, function () {
console.log('App started on port 5959');
});