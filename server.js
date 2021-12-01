const fs = require('fs').promises;

const express = require('express');

const app = express();

app.get('/', (req, res) => {

    console.log('some request');

    (async () => {

        try {

            const data = await fs.readFile('./page.html', 'utf-8');

            res.send(data);

        } catch (err) {

            res.send(err);

            console.log(err);

        }

    })();

});

app.listen(3000, () => {

    console.log(`Example app listening at http://localhost:3000`);

});

console.log('End of the script');