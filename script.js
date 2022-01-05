const tic_tac_toe = {
    board:['', '', '', '', '', '', '', '', ''], 
    simbols:['X', 'O'],

    container_element: null, 
    gameover: false,

    init: function(container){
        this.container_element = container;
    },
    
    makePlay: function (position){
        if(this.gameover) return false;
        if (this.board[position] === '') {
            this.board[position] = this.simbols
        };
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
tic_tac_toe.draw();