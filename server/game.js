const rowNames = ["8", "7", "6", "5", "4", "3", "2", "1"];
const colNames = ["A", "B", "C", "D", "E", "F", "G", "H"];

const populateBoard = function(board) {
	board.row[0].square[0].piece = {
		name: "T",
		type: "black-rook"
	};
	board.row[0].square[7].piece = {
		name: "T",
		type: "black-rook"
	};
	board.row[7].square[0].piece = {
		name: "T",
		type: "white-rook"
	};
	board.row[7].square[7].piece = {
		name: "T",
		type: "white-rook"
	};
	return board;
}

const getInitBoard = function() {
	let emptyBoard = {
		row: rowNames.map( (r, i) => {
			return {
				square: colNames.map( (c, j) => {
					return {
						color: ((i+j) % 2 == 0) ? "clear":"dark",
						name: c+r,
					}
				})	
			};
		})
	};
	return populateBoard(emptyBoard);
}

module.exports = {
  getGameData: function(gameId) {
    if (gameId) {
      return {
				board: getInitBoard(),
				title: "Partie",
			};
    }
    return null;
  },
};
