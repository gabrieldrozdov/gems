// Total number of letters to generate
let boxCount = 300;

// Generate the letters
function generateBoxes() {
	// Create temp string of all letters
	let temp = '';
	for (let i=0; i<boxCount; i++) {
		// Randomize the CSS styles
		let top = `${Math.floor(Math.random()*100)}%`;
		let left = `${Math.floor(Math.random()*100)}%`;
		let width = `${Math.floor(Math.random()*50)}vw`;
		let height = `${Math.floor(Math.random()*50)}vw`;
		let transform = `translate(-50%, -50%) rotateX(${Math.floor(Math.random()*360)}deg) rotateY(${Math.floor(Math.random()*360)}deg) rotateZ(${Math.floor(Math.random()*360)}deg) perspective(1000px)`;

		// Add full element to temp string
		temp += `
			<div class="box" style="width: ${width}; height: ${height}; top: ${top}; left: ${left}; transform: ${transform};"></div>
		`;
	}

	// Add to container and create array of letter elements
	const boxes = document.querySelector('.boxes');
	boxes.innerHTML = temp;
	boxElements = boxes.querySelectorAll('.box');
}

function moveBoxes() {
	// Select box to move
	let box = boxElements[Math.floor(Math.random()*boxElements.length)];

	// Randomize CSS styles
	let width = `${Math.floor(Math.random()*50)}vw`;
	let height = `${Math.floor(Math.random()*50)}vw`;
	let top = `${Math.floor(Math.random()*100)}%`;
	let left = `${Math.floor(Math.random()*100)}%`;
	let transform = `translate(-50%, -50%) rotateX(${Math.floor(Math.random()*360)}deg) rotateY(${Math.floor(Math.random()*360)}deg) rotateZ(${Math.floor(Math.random()*360)}deg) perspective(1000px)`;

	// Apply CSS values
	box.style.width = width;
	box.style.height = height;
	box.style.top = top;
	box.style.left = left;
	box.style.transform = transform;

	// Loop
	setTimeout(moveBoxes, 500);
}

generateBoxes();
moveBoxes();