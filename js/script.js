const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();
function TicTacToeGame() {
    const board = new Board();
    const humanplayer = new HumanPlayer();
    const computerplayer = new ComputerPlayer();
    let turn=0;
    this.start = function() {

    }
}

function Board() {
    this.position = Array.from(document.querySelectorAll('.col'))
    console.log(this.position)
}

function HumanPlayer() {

}

function ComputerPlayer() {

}