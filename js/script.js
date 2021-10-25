const squareContainer = document.getElementById("containerSquare");

for (let i = 1; i < 1000; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    squareContainer.append(square);
}