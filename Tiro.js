function Tiro(x, y, raio, vy) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = vy;
    this.ax = 0;
    this.ay = 0;
    this.raio = raio;
    this.col = 0;
    this.cor = 'yellow';
    this.img = new Image();
    this.img.src = "img/tiros.png";
    this.excluir = 0;
}

Tiro.prototype.mover = function () {
    this.vx = this.vx + this.ax * dt;
    this.x = this.x + this.vx * dt;
    this.vy = this.vy + this.ay * dt;
    this.y = this.y + this.vy * dt;
}

Tiro.prototype.desenhar = function () {
    // img, sx, sy, sw, sh, dx, dy, dw, dh
    ctx.drawImage(this.img,
            Math.floor(this.col) * 32, 0, 32, 32,
            this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
    if (this.col >= 4) {
        this.col = 0;
    } else {
        this.col += 16 * dt;
    }
}

Tiro.prototype.restricoes = function () {

}