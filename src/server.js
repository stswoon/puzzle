const express = require('express');
const fs = require('fs');

const app = express();
app.get('/health', (req, res) => res.send('OK'));

function registerHtml(url, fileName) {
    app.get(url, async (req, res) => {
        res.send(fs.readFileSync(__dirname + '/public/' + fileName, 'utf8'));
    });
}

registerHtml('/neofnd', 'step1.html');
registerHtml('/envpwe8nvd42fksv', 'step2.html');
registerHtml('/hfnbsl', 'step3.html');
registerHtml('/jorn390as', 'step4.html');
registerHtml('/jorn390as_fallback', 'step4_fallback.html');
registerHtml('/neosdorb4', 'step5.html');

app.use(express.static(__dirname + '/public', {extensions: ['html']}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
