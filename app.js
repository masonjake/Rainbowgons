function randomPolygon() {
	const points = [];
	const n = 3 + Math.floor(Math.random() * 10); // Generate 3 to 9 points

	for (let i = 0; i < n; i++) {
		const x = 10 + Math.floor(Math.random() * 100);
		const y = 10 + Math.floor(Math.random() * 100);
		points.push(`${x}% ${y}%`);
	}

	return `polygon(${points.join(', ')})`;
}

document.addEventListener('mousemove', (event) => {
	let mouseX = event.clientX;
	let mouseY = event.clientY;

	let balls = document.createElement('div');

	balls.style.clipPath = randomPolygon();

	balls.style.backgroundColor = `rgb(${Math.floor(
		Math.random() * 255
	)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
	balls.style.height = Math.floor(Math.random() * 100) + 10 + 'px';
	balls.style.width = Math.floor(Math.random() * 100) + 10 + 'px';
	balls.style.position = 'absolute';
	balls.style.top = mouseY - parseInt(balls.offsetHeight) / 2 + 'px';
	balls.style.left = mouseX - parseInt(balls.offsetWidth) / 2 + 'px';
	balls.style.marginTop = -(parseInt(balls.offsetHeight) / 2) + 'px';
	balls.style.marginLeft = -(parseInt(balls.offsetWidth) / 2) + 'px';

	document.body.appendChild(balls);
});
