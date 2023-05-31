const express = require('express');
const app = express();
const port = 3010;

app.get('/some-action', async (req, res) => {
    try {
        await riskyOperation();
    } catch {
        // handle error
        if (error.code === 'ECONNREFUSED') {
            // handle error
        } else {
            // handle error
            res.status(500).send('Something went wrong');
        }
    }
});

app.get('/some-other-action', async (req, res) => {
    try {
        await riskyOperation();
        await anotherRiskyOperation();
    } catch {
        res.status(500).send('Something went wrong');
    }
});

var server = app.listen(3010, function () {
    var port = server.address().port;
    console.log('Example app listening at port %s', port);
});

async function riskyOperation() {
    // This function does a risky IO operation that might fail
    // sometimes for various reasons.
    // return error after 5 seconds
    setTimeout(() => {
        throw new Error('Something went wrong');
    }, 5000);
}

async function anotherRiskyOperation() {
    // This function does a risky IO operation that might fail
    // sometimes for various reasons.
    // return error after 5 seconds
    setTimeout(() => {
        throw new Error('Something went wrong');
    }, 5000);
}
