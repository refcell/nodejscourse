const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(req);
    res.setHeader('Content Type', 'text/html');
    res.write('<html><body><h1>Demo Page</h1></body></html>');
    res.end();
};

// module.exports = {
//     handler: requestHandler,
//     someText: "Hello"
// };

exports.handler = requestHandler;
exports.someText = "Hello";