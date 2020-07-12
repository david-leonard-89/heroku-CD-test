const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/lazyloading'));
ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/angular-heroku-test/index.html'));
});
ngApp.listen(process.env.PORT || 7071);