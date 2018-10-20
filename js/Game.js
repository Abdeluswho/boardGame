class Game {
    constructor(){
       this.board = new Board();
       this.players = this.createPlayers();
       this.ready = false;
    }

    get activePlayer(){
        return this.players.find(player => player.active);
    }

    createPlayers(){
        const Players = [ new Player('Player1', '#e15258', 1, true),
                        new Player('Player2', '#e59a13', 2)
        ]
        return Players;
    }

    startGame(){
        //gets game ready for play
        this.board.drawHTMLBoard();
        this.activePlayer.activeTokens.drawHTMLToken();
        this.ready = true;
    }
}