const coordinates = [
    { square: "A2", piece: "white-pawn" },
    { square: "B2", piece: "white-pawn" },
    { square: "C2", piece: "white-pawn" },
    { square: "D2", piece: "white-pawn" },
    { square: "E2", piece: "white-pawn" },
    { square: "F2", piece: "white-pawn" },
    { square: "G2", piece: "white-pawn" },
    { square: "H2", piece: "white-pawn" },
    { square: "A7", piece: "black-pawn" },
    { square: "B7", piece: "black-pawn" },
    { square: "C7", piece: "black-pawn" },
    { square: "D7", piece: "black-pawn" },
    { square: "E7", piece: "black-pawn" },
    { square: "F7", piece: "black-pawn" },
    { square: "G7", piece: "black-pawn" },
    { square: "H7", piece: "black-pawn" },
    { square: "A1", piece: "white-rook" },
    { square: "B1", piece: "white-bishop" },
    { square: "C1", piece: "white-knight" },
    { square: "D1", piece: "white-queen" },
    { square: "E1", piece: "white-king" },
    { square: "F1", piece: "white-knight" },
    { square: "G1", piece: "white-bishop" },
    { square: "H1", piece: "white-rook" },
    { square: "A8", piece: "black-rook" },
    { square: "B8", piece: "black-bishop" },
    { square: "C8", piece: "black-knight" },
    { square: "D8", piece: "black-queen" },
    { square: "E8", piece: "black-king" },
    { square: "F8", piece: "black-knight" },
    { square: "G8", piece: "black-bishop" },
    { square: "H8", piece: "black-rook" },
];

coordinates.forEach((coordinate) => {
    let square = document.querySelector(`#${coordinate.square}`);
    let piece = document.createElement("span");
    piece.classList.add("piece", `${coordinate.piece}`);
    square.appendChild(piece);
});
