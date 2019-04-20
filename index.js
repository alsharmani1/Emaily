const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send({hi: 'there'});
});
rttret
app.listen(3000);er