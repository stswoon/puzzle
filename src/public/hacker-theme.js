(function () {
    if (document.querySelector('.hacker-layout')) return;

    var ASCII = [
        '  ██████╗ ██╗   ██╗███████╗███████╗██╗     ███████╗',
        '  ██╔══██╗██║   ██║██╔════╝██╔════╝██║     ██╔════╝',
        '  ██████╔╝██║   ██║███████╗█████╗  ██║     █████╗  ',
        '  ██╔═══╝ ██║   ██║╚════██║██╔══╝  ██║     ██╔══╝  ',
        '  ██║     ╚██████╔╝███████║███████╗███████╗███████╗',
        '  ╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝╚══════╝'
    ].join('\n');

    var SIDE_LEFT = [
        '┌──────────┐',
        '│ ACCESS   │',
        '│ LEVEL: ? │',
        '│ ENCRYPT  │',
        '│ AES-256  │',
        '└──────────┘',
        '',
        '01001000',
        '01100001',
        '01100011',
        '01101011',
        '',
        '/dev/null',
        'proxy:on',
        'trace:off'
    ].join('\n');

    var SIDE_RIGHT = [
        '╔══════════╗',
        '║  SYSTEM  ║',
        '║  BREACH  ║',
        '║ DETECTED ║',
        '╚══════════╝',
        '',
        '0xDEADBEEF',
        '0xC0FFEE00',
        '0xFEEDFACE',
        '',
        'ssh -p 22',
        'nmap -sS',
        'grep -r'
    ].join('\n');

    var scanlines = document.createElement('div');
    scanlines.className = 'scanlines';
    document.body.appendChild(scanlines);

    var vignette = document.createElement('div');
    vignette.className = 'vignette';
    document.body.appendChild(vignette);

    var leftArt = document.createElement('pre');
    leftArt.className = 'side-art side-art-left';
    leftArt.textContent = SIDE_LEFT;
    document.body.appendChild(leftArt);

    var rightArt = document.createElement('pre');
    rightArt.className = 'side-art side-art-right';
    rightArt.textContent = SIDE_RIGHT;
    document.body.appendChild(rightArt);

    var layout = document.createElement('div');
    layout.className = 'hacker-layout';

    var terminal = document.createElement('div');
    terminal.className = 'terminal-window';

    var header = document.createElement('div');
    header.className = 'terminal-header';
    header.innerHTML =
        '<span class="terminal-dot red"></span>' +
        '<span class="terminal-dot yellow"></span>' +
        '<span class="terminal-dot green"></span>' +
        '<span class="terminal-title">secure_shell — puzzle@matrix — bash</span>';

    var body = document.createElement('div');
    body.className = 'terminal-body';

    ['tl', 'tr', 'bl', 'br'].forEach(function (pos) {
        var corner = document.createElement('div');
        corner.className = 'corner-brackets ' + pos;
        body.appendChild(corner);
    });

    var banner = document.createElement('pre');
    banner.className = 'ascii-banner';
    banner.textContent = ASCII;
    body.appendChild(banner);

    var prompt = document.createElement('div');
    prompt.className = 'prompt-line';
    prompt.textContent = 'init sequence loaded — awaiting input';
    body.appendChild(prompt);

    var content = document.createElement('div');
    content.className = 'terminal-content';

    var skip = new Set([scanlines, vignette, leftArt, rightArt]);
    Array.from(document.body.childNodes).forEach(function (node) {
        if (skip.has(node) || (node.id === 'matrix-canvas')) return;
        content.appendChild(node);
    });

    body.appendChild(content);

    var status = document.createElement('div');
    status.className = 'status-bar';
    status.innerHTML =
        '<span>PROTOCOL: HTTP/1.1</span>' +
        '<span>STATUS: <span style="color:var(--matrix-green)">ACTIVE</span></span>' +
        '<span>SESSION: <span class="blink">_</span></span>';
    body.appendChild(status);

    terminal.appendChild(header);
    terminal.appendChild(body);
    layout.appendChild(terminal);
    document.body.appendChild(layout);

    var hexChars = '0123456789ABCDEF';
    for (var i = 0; i < 6; i++) {
        var rain = document.createElement('div');
        rain.className = 'hex-rain';
        rain.style.left = (8 + i * 16) + '%';
        rain.style.animationDuration = (14 + i * 3) + 's';
        rain.style.animationDelay = (-i * 4) + 's';
        var line = '';
        for (var j = 0; j < 40; j++) {
            line += hexChars.charAt(Math.floor(Math.random() * 16));
            if (j % 4 === 3) line += ' ';
        }
        rain.textContent = line;
        document.body.appendChild(rain);
    }
})();
