(function () {
    var canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    document.body.insertBefore(canvas, document.body.firstChild);

    var ctx = canvas.getContext('2d');
    var chars = 'アイウエオカキクケコサシスセソ0123456789ABCDEF<>[]{}/\\|';
    var fontSize = 14;
    var columns = 0;
    var drops = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (var i = 0; i < columns; i++) {
            drops[i] = Math.random() * canvas.height / fontSize;
        }
    }

    function draw() {
        ctx.fillStyle = 'rgba(2, 8, 4, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px monospace';

        for (var i = 0; i < drops.length; i++) {
            var text = chars.charAt(Math.floor(Math.random() * chars.length));
            var x = i * fontSize;
            var y = drops[i] * fontSize;

            ctx.fillStyle = Math.random() > 0.985 ? '#ffffff' : '#00ff41';
            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += 0.6 + Math.random() * 0.4;
        }
    }

    resize();
    window.addEventListener('resize', resize);
    setInterval(draw, 45);
})();
