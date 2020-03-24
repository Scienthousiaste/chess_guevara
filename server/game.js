const rowNames = ["8", "7", "6", "5", "4", "3", "2", "1"];
const colNames = ["A", "B", "C", "D", "E", "F", "G", "H"];

const populateBoard = function(board) {
	board.row[0].square[0].piece = {
		name: "T",
		type: "black-rook"
	};
	board.row[0].square[1].piece = {
		name: "C",
		type: "black-knight"
	};
	board.row[0].square[2].piece = {
		name: "F",
		type: "black-bishop"
	};
	board.row[0].square[3].piece = {
		name: "Q",
		type: "black-queen"
	};
	board.row[0].square[4].piece = {
		name: "R",
		type: "black-king"
	};
	board.row[0].square[5].piece = {
		name: "F",
		type: "black-bishop"
	};
	board.row[0].square[6].piece = {
		name: "C",
		type: "black-knight"
	};
	board.row[0].square[7].piece = {
		name: "T",
		type: "black-rook"
	};

	board.row[7].square[0].piece = {
		name: "T",
		type: "white-rook"
	};
	board.row[7].square[1].piece = {
		name: "C",
		type: "white-knight"
	};
	board.row[7].square[2].piece = {
		name: "F",
		type: "white-bishop"
	};
	board.row[7].square[3].piece = {
		name: "Q",
		type: "white-queen"
	};
	board.row[7].square[4].piece = {
		name: "R",
		type: "white-king"
	};
	board.row[7].square[5].piece = {
		name: "F",
		type: "white-bishop"
	};
	board.row[7].square[6].piece = {
		name: "C",
		type: "white-knight"
	};
	board.row[7].square[7].piece = {
		name: "T",
		type: "white-rook"
	};

	for (let i = 0; i <= 7; i++) {
		board.row[1].square[i].piece = {
			name: "P",
			type: "black-pawn",
		}
		board.row[6].square[i].piece = {
			name: "P",
			type: "white-pawn",
		}

	}

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
