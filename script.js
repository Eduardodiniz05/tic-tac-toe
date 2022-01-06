const tic_tac_toe = {
    board:['', '', '', '', '', '', '', '', ''], 
    simbols: {
        options: ['X', 'O'],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }

    },

    container_element: null, 
    gameOver: false,
    winningSequence: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    init: function(container){
        this.container_element = container;
    },
    
    makePlay: function (position){
        if(this.gameOver) return false;
        if (this.board[position] === '') {
            this.board[position] = this.simbols.options[this.simbols.turn_index];
            this.draw()
            let winningSequenceIndex = this.checkWinningSequence(this.simbols.options[this.simbols.turn_index]);
            if(winningSequenceIndex >= 0) {
                this.gameIsOver();
            }else {
            this.simbols.change();
            }
        return true;
        } else {
            return false;
        }
    },

    gameIsOver: function() {
        this.gameOver = true;
        console.log('Game Over');
    },

    start: function() {
        this.board.fill('');
        this.draw();
        this.gameOver = false;
    }, 

   checkWinningSequence: function(simbol){
       for (i in this.winningSequence) {
        if  (this.board[this.winningSequence[i][0] ] == simbol &&
            this.board[this.winningSequence[i][1] ] == simbol &&
            this.board[this.winningSequence[i][2] ] == simbol) {
                return i;
                console.log('sequencia vencedora' + i);
            };
        };
        return -1
   },
            
    

    draw: function(){
        let content = '';
        for (i in this.board) {
            content += '<div onclick="tic_tac_toe.makePlay('+ i +')">'+this.board[i]+ '</div>';
        };
        this.container_element.innerHTML= content;
    }
};

tic_tac_toe.init(document.querySelector('.game'));
tic_tac_toe.start();