const grid = document.querySelector(".grid");

numberPerSide = 10
squareSize = 600 / numberPerSide
console.log(squareSize)

grid.style.gridTemplateColumns = `repeat(${numberPerSide}, auto)`;

function makeGrid() {
	for (i = 1; i <= numberPerSide; i++) {
		for (j = 1; j <= numberPerSide; j++) {
			const row = document.createElement("div");
			row.classList.add("square");
			grid.appendChild(row);

		}
	}
}

const squares = document.getElementsByClassName("square")

function updateSquareSize(){
  Array.from(squares).forEach(function(square) {
      square.style.height = `${squareSize}px`;
      square.style.width = `${squareSize}px`;
  });
}

makeGrid();
updateSquareSize();

for (let square of squares) {
	square.addEventListener(
		"mouseover",
		(event) => {
			event.target.style.background = "orange";
		}
	)
}

