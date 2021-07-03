const wrapper = document.querySelector('body');

// Some random colors
const colors = ['#333333', '#ff7eee', '#FFFFFF', '#00b1d2', '#1b1b1b'];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
	let ball = document.createElement('div');
	ball.classList.add('ball');
	ball.style.background = colors[Math.floor(Math.random() * colors.length)];
	ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
	ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
	ball.style.transform = `scale(${Math.random()})`;
	ball.style.width = `${Math.random()}em`;
	ball.style.height = ball.style.width;

	balls.push(ball);
	wrapper.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
	let to = {
		x: Math.random() * (i % 2 === 0 ? -11 : 11),
		y: Math.random() * 12,
	};

	let anim = el.animate(
		[
			{ transform: 'translate(0, 0)' },
			{ transform: `translate(${to.x}rem, ${to.y}rem)` },
		],
		{
			duration: (Math.random() + 1) * 3000, // random duration
			direction: 'alternate',
			fill: 'both',
			iterations: Infinity,
			easing: 'ease-in-out',
		}
	);
});
