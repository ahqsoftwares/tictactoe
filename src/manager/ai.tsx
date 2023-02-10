export default function makeMove(data: string[]): number {
         let board = data;

         let move = 0;
         for (let i = 0; i < data.length; i++) {
                  let key = board[i];

                  if (key === "") {
                           move = i;
                  }
         }

         return move;
}

function minimax(board: string[], depth: Number, isMaximizing: boolean) {

}