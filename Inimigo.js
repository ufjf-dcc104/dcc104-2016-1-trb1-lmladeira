function Inimigo(x, y, vx, vy, ax, ay, raio) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
    this.raio = raio;
    this.img = new Image();
    this.img.src = "img/inimigo1.png";
    this.excluir = 0;
}

Inimigo.prototype.colidiuComCircular = function (alvo) {
    var distancia = Math.sqrt(
            Math.pow(alvo.x - this.x, 2) +
            Math.pow(alvo.y - this.y, 2)
            );
    return distancia < (alvo.raio + this.raio);
};

Inimigo.prototype.mover = function () {
    this.vx = this.vx + this.ax * dt;
    this.x = this.x + this.vx * dt;
    this.vy = this.vy + this.ay * dt;
    this.y = this.y + this.vy * dt;
}

Inimigo.prototype.restricoes = function () {
    if (this.y > tela.height + 15) {
        this.excluir = 1;
    }
    this.ax = 0.5 * (pc.x - this.x);
    //this.ax = 0.4 * (pc.x - this.x);
};

Inimigo.prototype.desenhar = function () {
    /*
     ctx.strokeStyle = 'black';
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.raio, 0, 2*Math.PI);
     ctx.closePath();
     ctx.stroke();*/
    //img, X, Y, W, H
    ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
};