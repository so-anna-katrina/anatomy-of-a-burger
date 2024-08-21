// Function to center text on canvas
function centerText(ctx, text, x, y) {
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = parseInt(ctx.font, 10);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
}

// [hero] div 1
const canvas1 = document.getElementById('hero1-canvas');
const ctx1 = canvas1.getContext('2d');
ctx1.font = `bold ${200}px Montserrat`;
ctx1.strokeStyle = '#784618';
ctx1.lineWidth = 5;
ctx1.fillStyle = 'white';

const centerX1 = canvas1.width / 2;
const centerY1 = canvas1.height / 2;
centerText(ctx1, 'ANATOMY', centerX1, centerY1);

// [hero] div 2
const canvas2 = document.getElementById('hero2-canvas');
const ctx2 = canvas2.getContext('2d');
ctx2.font = `${160}px Montserrat`;
ctx2.strokeStyle = '#784618';
ctx2.lineWidth = 5;
ctx2.fillStyle = '#FFC14D';

const centerX2 = canvas2.width / 2;
const centerY2 = canvas2.height / 2;
const offsetX = 350;
centerText(ctx2, 'OF', centerX2 - offsetX, centerY2);
centerText(ctx2, 'A...', centerX2 + offsetX, centerY2);

// [hero] div 3
const canvas3 = document.getElementById('hero3-canvas');
const ctx3 = canvas3.getContext('2d');
ctx3.font = `bold ${200}px Montserrat`;
ctx3.strokeStyle = '#784618';
ctx3.lineWidth = 5;
ctx3.fillStyle = 'white';

const centerX3 = canvas3.width / 2;
const centerY3 = canvas3.height / 2;
centerText(ctx3, 'BURGER', centerX3, centerY3);