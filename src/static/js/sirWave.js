

function SiriWave(opt) {
    this.opt = opt || {};
    this.K = 0.8;
    this.F = 15;
    this.speed = this.opt.speed || 0.1;
    this.noise = this.opt.noise || 10;
    this.phase = this.opt.phase || 0;
    this.container = this.opt.container || "#canvas";
    if (!window.devicePixelRatio) {
        devicePixelRatio = 1
    }
    this.width = devicePixelRatio * (this.opt.width || $(this.opt.container).width());
    this.height = devicePixelRatio * (this.opt.height || $(this.opt.container).height());
    this.MAX = (this.height / 2) - 4;
    this.canvas = $(this.opt.container)[0];
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this.run = false
}
SiriWave.prototype = {
    _globalAttenuationFn: function(x) {
        return Math.pow(this.K * 4 / (this.K * 4 + Math.pow(x, 4)), this.K * 2)
    },
    _drawLine: function(attenuation, color, width, noise, F) {
        this.ctx.moveTo(0, 0);
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width || 1;
        var x, y;
        F = F || this.F;
        noise = noise * this.MAX || this.noise;
        for (var i = -this.K; i <= this.K; i += 0.01) {
            i = parseFloat(parseFloat(i).toFixed(2));
            x = this.width * ((i + this.K) / (this.K * 2));
            y = this.height / 2 + noise * Math.pow(Math.sin(i * 10 * attenuation), 1) * Math.sin(F * i - this.phase);
            this.ctx.lineTo(x, y)
        }
        this.ctx.lineTo(this.width, this.height);
        this.ctx.lineTo(0, this.height);
        this.ctx.fillStyle = color;
        this.ctx.fill()
    },
    _clear: function() {
        this.ctx.globalCompositeOperation = "destination-out";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.globalCompositeOperation = "source-over"
    },
    _draw: function() {
        if (!this.run) {
            return
        }
        this.phase = (this.phase + this.speed) % (Math.PI * 64);
        this._clear();
        this._drawLine(0.4, "rgba(255, 255, 255, 1)", 1, 0.15, 1);
        this._drawLine(0.2, "rgba(255, 255, 255, 0.2)", 1, 0.3, 1);
        this._drawLine(0.5, "rgba(255, 255, 255, 0.1)", 1, 0.25, 3);
        clearAnimationFrame = requestAnimationFrame(this._draw.bind(this), 2000)
    },
    start: function() {
        this.phase = 0;
        this.run = true;
        this._draw()
    },
    stop: function() {
        this.run = false;
        this._clear()
    },
    setNoise: function(v) {
        this.noise = Math.min(v, 1) * this.MAX
    },
    setSpeed: function(v) {
        this.speed = v
    },
    set: function(noise, speed) {
        this.setNoise(noise);
        this.setSpeed(speed)
    },
    bl: function(val) {
        return 1920 / 15
    }
};


exports.SiriWave  = SiriWave;
