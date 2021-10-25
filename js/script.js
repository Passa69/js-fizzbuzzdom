// costante del contenitore
const squareContainer = document.getElementById("containerSquare");

// ciclo base per la ripetizione degli square
for (let i = 1; i < 1000; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    squareContainer.append(square);

    // condizioni
    if (i % 3 == 0 && i % 5 == 0) {
        square.classList.add("square15");
        square.replaceChildren("fizzbuzz");

    } else if (i % 3 == 0) {
        square.classList.add("square3");
        square.replaceChildren("fizz");

    } else if (i % 5 == 0) {
        square.classList.add("square5");
        square.replaceChildren("buzz");
    }
}