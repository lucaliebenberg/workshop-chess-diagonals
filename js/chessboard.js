export default {
	draw,
	highlight
};


var highlighted = [];
var diagonals = [];
var tileDiagonals = new Map();

// ****************************

function draw(boardEl) {
	for (let i = 0; i < 30; i++) {
		diagonals.push([]);
	}
	
	for (let i = 0; i < 8; i++) {
		let rowEl = document.createElement("div");
		for (let j = 0; j < 8; j++) {
			let tileEl = document.createElement("div");
			rowEl.appendChild(tileEl);
			
			let majorDiag = diagonals[7 - (i - j)];
			let minorDiag = diagonals[15 + (i + j)];

			majorDiag.push(tileEl);
			minorDiag.push(tileEl);

			tileDiagonals.set(tileEl, [ majorDiag, minorDiag ])
		}
		boardEl.appendChild(rowEl);
	}
}

function highlight(tileEl) {
	// clear all currently highlighted tiles
	for (let diagonal of highlighted) {
		for (let el of diagonal) {
			el.classList.remove("highlighted");
		}
	}

	if (tileEl) {
		highlighted = tileDiagonals.get(tileEl);

		for (let diagonal of highlighted) {
			for (let el of diagonal) {
				el.classList.add("highlighted");
			}
		}
	}
}
