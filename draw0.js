// Získání reference k HTML canvas elementu s id 'myCanvas'
let canvas = document.getElementById('myCanvas');

// Získání 2D vykreslovacího kontextu pro canvas
let ctx = canvas.getContext('2d');

// Nastavení barvy výplně na šedou
ctx.fillStyle = '36363636';

// Vykreslení obdélníka, který pokryje celý canvas touto šedou barvou
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Přidání posluchače událostí k celému dokumentu pro detekci stisku klávesy
document.addEventListener('keydown', function(event) {
    console.log(event);
    // Kontroluje, zda byla stisknuta klávesa Escape
    if (event.code === 'Escape') {
        // Pokud ano, znovu vykreslí celý canvas šedou barvou
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return; // Ukončení funkce
    }

    switch (event.key.toUpperCase()) {
        case 'E':
            randomEllipse();
            break;
        case 'S':
            randomSquare();
            break;
        case 'C':
            drawConcentricCircles();
            break;
        case 'R':
            drawRandomRectangle();
            break;
        case 'T':
            drawRandomTriangle();
            break;
        case 'F':
            drawRandomHexagon();
            break; 
    }
});

function randomSquare() {
    // Generuje náhodné souřadnice x a y uvnitř plátna
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    // Generuje náhodnou velikost obdélníka mezi 50 a 150
    let size = Math.random() * 100 + 50;
    // Generuje náhodnou barvu
    let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    drawSquare(x, y, size, col);
}

function randomEllipse() {
    // Generuje náhodné souřadnice x a y uvnitř plátna
    let height = Math.random() * 100 + 50;
    let width = Math.random() * 100 + 50; 
    let x = Math.random() * ((canvas.width - width) - 20) + 10 + (width / 2);
    let y = Math.random() * ((canvas.height - height) - 20) + 10 + (height / 2);
    let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    drawEllipse(x, y, width, height, col);
}

function drawConcentricCircles(count = 5, gap = 15) {
    for(let c = 1; c <= count; c++) {
        drawCircle(canvas.width / 2, canvas.height / 2, c * gap, 'black');
    }
}




// Funkce pro vykreslení elipsy na plátno s danými parametry
function drawEllipse(x, y, w, h, col) {
    // Nastavení barvy výplně pro elipsu
    ctx.fillStyle = col;
    // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
    ctx.beginPath();
    // Vykreslení elipsy s centrem v bodě (x, y), s horizontálním poloměrem (w / 2),
    // vertikálním poloměrem (h / 2) a úhlem od 0 do 2π (což je celý kruh)
    ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
    // Vyplnění elipsy nastavenou barvou
    ctx.fill();
}

// Funkce pro vykreslení kruhu na plátno s danými parametry
function drawCircle(x, y, r, col) {
    // Nastavení barvy výplně pro kruh
    ctx.fillStyle = col;
    // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
    ctx.beginPath();
    // Vykreslení kruhu s centrem v bodě (x, y), poloměrem (r) a úhlem od 0 do 2π
    // (což je celý kruh)
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    // Vyplnění kruhu nastavenou barvou
    ctx.stroke();
}

// Funkce pro vykreslení čtverce na plátno s danými parametry
function drawSquare(x, y, s, col) {
    // Nastavení barvy výplně pro čtverec
    // ctx.fillStyle = col;
    // Vykreslení čtverce na plátno s danými souřadnicemi (x, y) a rozměry (s x s)
    // ctx.fillRect(x, y, s, s);
    ctx.beginPath();
    ctx.strokeStyle = col;
    ctx.lineWidth = 5;
    ctx.rect(x, y, s, s);
    ctx.stroke();
}

function drawRandomRectangle() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let width = Math.random() * 100 + 50;
    let height = Math.random() * 100 + 50;
    let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    drawRectangle(x, y, width, height, col);
}
function drawRectangle(x, y, w, h, col) {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
}

function drawRandomTriangle() {
    let x1 = Math.random() * canvas.width;
    let y1 = Math.random() * canvas.height;
    let x2 = Math.random() * canvas.width;
    let y2 = Math.random() * canvas.height;
    let x3 = Math.random() * canvas.width;
    let y3 = Math.random() * canvas.height;
    let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    drawTriangle(x1, y1, x2, y2, x3, y3, col);
}
function drawTriangle(x1, y1, x2, y2, x3, y3, col) {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}

function drawRandomHexagon() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 50 + 20;
    let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    drawHexagon(x, y, size, col);
}
function drawHexagon(x, y, size, col) {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
    for (let i = 1; i <= 6; i++) {
        ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
    }
    ctx.closePath();
    ctx.fill();
}
