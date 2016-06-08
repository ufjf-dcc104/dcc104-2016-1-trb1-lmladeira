function Item(x, y, raio) {
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.img = new Image();
    this.img.src = "img/1up.png";
    this.cd = 10;
    this.tempo = 5;
}

Item.prototype.colidiuComCircular = function (alvo) {
    var distancia = Math.sqrt(
            Math.pow(alvo.x - this.x, 2) +
            Math.pow(alvo.y - this.y, 2)
            );
    return distancia < (alvo.raio + this.raio);
};

Item.prototype.desenhar = function () {
    ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
};