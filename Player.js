function Player() {
    this.x = 110;
    this.y = tela.height - 50;
    this.raio = 18;
    this.vx = 0;
    this.ax = 0;
    this.vy = 0;
    this.ay = 0;
    this.cor = 'lightgrey';
    this.danificado = 0;
    this.img = new Image();
    this.img.src = "img/player1.png";
    this.score = 1;
    this.energy = 5;
    this.tirocd = 1/2;
}

Player.prototype.mover = function () {
    this.vx = this.vx + this.ax * dt;
    this.x = this.x + this.vx * dt;
    this.vy = this.vy + this.ay * dt;
    this.y = this.y + this.vy * dt;
    this.score += 30 * dt;
}

Player.prototype.desenhar = function () {
    if (this.danificado > 0) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'hsl(' + (this.danificado / 2 * 120) + ', 80%, 50%)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio*1.4, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
    } else {
        ctx.fillStyle = this.cor;
    }
    this.danificado -= dt;
    this.tirocd -= dt;

    ctx.translate(this.x,this.y);
    ctx.rotate(this.vx/1000);
    ctx.drawImage(this.img, -this.raio, -this.raio, 2 * this.raio, 2 * this.raio);
    ctx.rotate(-this.vx/1000);
    ctx.translate(-this.x,-this.y);
    
    
    ctx.font = "15px Impact";
    ctx.lineWidth = 1;

  
    ctx.fillStyle = 'hsl(220, 70%, 60%)';
    ctx.fillText("Score: " + Math.floor(pc.score), 10, 20);
    if (pc.energy>=5) {
        ctx.fillStyle = 'hsl(120, 80%, 50%)';
    } else {
        ctx.fillStyle = 'hsl(' + (this.energy * 24) + ', 80%, 50%)';
    }
    ctx.fillText("Energia: " + Math.floor(pc.energy), 10, 40);
}

Player.prototype.restricoes = function () {
    if (this.x < 15) {
        this.x = 15;
        this.vx = 0;
        this.ax = 0;
    }
    if (this.x > tela.width - 15) {
        this.x = tela.width - 15;
        this.vx = 0;
        this.ax = 0;
    }
    if (this.y < 15) {
        this.y = 15;
        this.vy = 0;
        this.ay = 0;
    }
    if (this.y > tela.height - 15) {
        this.y = tela.height - 15;
        this.vy = 0;
        this.ay = 0;
    }
}