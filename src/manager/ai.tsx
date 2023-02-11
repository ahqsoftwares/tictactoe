import checkIfWon from "./checkIfWon";

export default function makeMove(data: string[], XIsRobot: boolean): number {
         let board = data;

         let move = 0;

         let bestScore = -Infinity;
         for (let i = 0; i < board.length; i++) {
                  const key = board[i];

                  if (key == "") {
                           board[i] = XIsRobot ? "X" : "O";

                           let score = minimax(board, 0, XIsRobot, false);
                  
                           board[i] = "";

                           if (score > bestScore) {
                                    bestScore = score;
                                    move = i;
                           }
                  }
         }

         return move;
}

function minimax(board: string[], depth: number, XisAi: boolean, isMaximizing: boolean) {
         const {
                  won,
                  by
         } = checkIfWon(board);

         if (won) {
                  if (by == "") {
                           return 0;
                  } else if (by == "X" && XisAi) {
                           return 1;
                  } else if (by == "O" && !XisAi) {
                           return 1;
                  } else {
                           return -1;
                  }
         }

         if (isMaximizing) {
                  let bestScore = -Infinity;

                  for (let i = 0; i < board.length; i++) {
                           const key = board[i];
         
                           if (key == "") {
                                    board[i] = XisAi ? "X" : "O";
         
                                    let score = minimax(board, depth + 1, XisAi, false);
                           
                                    board[i] = "";
         
                                    if (score > bestScore) {
                                             bestScore = score;
                                    }
                           }
                  }
                  return bestScore;
         } else {
                  let bestScore = Infinity;

                  for (let i = 0; i < board.length; i++) {
                           const key = board[i];
         
                           if (key == "") {
                                    board[i] = XisAi ? "O" : "X";
         
                                    let score = minimax(board, depth + 1, XisAi, true);
                           
                                    board[i] = "";
         
                                    if (score < bestScore) {
                                             bestScore = score;
                                    }
                           }
                  }
                  return bestScore;
         }
}