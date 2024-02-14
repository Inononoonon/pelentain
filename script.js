// script.js
window.onload = function() {
	// Heart Canvas Animation
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	let hearts = [];

	function Heart(x, y, size, color) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.color = color;
		this.rotate = Math.random() * 360;
		this.speed = Math.random() * 5 + 1;
	}

	Heart.prototype.draw = function() {
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.rotate * Math.PI / 180);
		ctx.beginPath();
		ctx.moveTo(0, -this.size);
		ctx.bezierCurveTo(-this.size / 2, this.size / 2, -this.size / 2, this.size / 2, 0, this.size);
		ctx.bezierCurveTo(this.size / 2, this.size / 2, this.size / 2, this.size / 2, 0, -this.size);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.restore();
	}

	Heart.prototype.update = function() {
		this.y += this.speed;
		if (this.y > canvas.height) {
			this.y = -this.size;
			this.x = Math.random() * canvas.width;
		}
		this.draw();
	}

	function createHearts() {
		for (let i = 0; i < 50; i++) {
			let size = Math.random() * 20 + 10;
			let x = Math.random() * canvas.width;
			let y = Math.random() * canvas.height;
			let color = `rgba(255, 0, 0, ${Math.random() * 0.5 + 0.5})`;
			hearts.push(new Heart(x, y, size, color));
		}
	}

	function animate() {
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < hearts.length; i++) {
			hearts[i].update();
		}
	}

	createHearts();
	animate();

	// Modal
	var modal = document.getElementById("modal");
	var btn = document.getElementById("loveBtn");
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
		modal.style.display = "block";
		gfNameModal.textContent = gfName.textContent;
		myNameModal.textContent = myName.textContent;
	}

	span.onclick = function() {