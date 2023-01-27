const express = require('express');
const fs = require('fs');

const app = express();
app.get('/health', (req, res) => res.send('OK'));

app.get('/neofnd', async (req, res) => {
    res.send(fs.readFileSync(__dirname + '/public/step1.html', 'utf8'));
});

app.get("/envpwe8nvd" + "42" + "fksv", async (req, res) => {
    res.send(fs.readFileSync(__dirname + '/public/step2.html', 'utf8'));
});

app.use(express.static(__dirname + '/public', {extensions: ['html']}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
