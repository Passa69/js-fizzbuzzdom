// costante del contenitore
const squareContainer = document.getElementById("containerSquare");

// ciclo base per la ripetizione degli square
for (let i = 1; i < 1000; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    squareContainer.append(square);

    if (i % 3 == 0) {
        square.classList.add("square3");
        square.append("fizz");

    } else if (i % 5 == 0) {
        square.classList.add("square5");
        square.append("buzz");

    } else (i % 15 == 0); {
        square.classList.add("square15");
        square.append("fizzbuzz");
    }
}