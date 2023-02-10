const strat = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
];

export default function checkIfWon(board: string[]): {won: boolean, by: string} {
         let matched = false;
         let wonBy = "";
         for (let i = 0; i < strat.length; i++) {
                  const test = strat[i];

                  const [in1, in2, in3] = test;

                  const matchByX = board[in1] == "X" && board[in2] == "X" && board[in3] == "X";
                  const matchByO = board[in1] == "O" && board[in2] == "O" && board[in3] == "O";

                  matched = matchByX  || matchByO;
                  if (matched) {
                           wonBy = matchByX ? "X" : "O"
                           break;
                  }
         }

         console.log(matched, wonBy);

         return {
                  won: matched,
                  by: wonBy
         };
}