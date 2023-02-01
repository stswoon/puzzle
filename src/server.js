const express = require('express');
const fs = require('fs');

const app = express();
app.get('/health', (req, res) => res.send('OK'));

function registerHtml(url, fileName, downloadFile) {
    app.get(url, async (req, res) => {
        const filePath = __dirname + '/public/' + fileName;
        if (downloadFile) {
            res.download(filePath);
        } else {
            const data = fs.readFileSync(filePath, 'utf8');
            res.send(data);
        }
    });
}

registerHtml('/neofnd', 'step1.html');
registerHtml('/envpwe8nvd42fksv', 'step2.html');
registerHtml('/hfnbsl', 'step3-4.html');
registerHtml('/jorn390as', 'step5.html');
registerHtml('/jorn390as_fallback', 'step5_fallback.html');
registerHtml('/neosdorb4', 'step6.html');
registerHtml('/39395', 'step7-8.html');
registerHtml('/archive', 'file.zip', true);
registerHtml('/jdnoenir', 'step9.html');
registerHtml('/e1ernre85', 'step10.html');
registerHtml('/vnsoec', 'step11.html');

app.use(express.static(__dirname + '/public', {extensions: ['html']}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
