var request = require('request');

request('http://www.google.com', function (err, res) {
    console.log(res.body);
});

console.log('Done!');
