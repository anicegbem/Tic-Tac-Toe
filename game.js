const GameBoard = (() => {
    let gameboard = [];
    return {gameboard};

})();

const players = (() => {
    const player1 = {name: "PlayerOne", sign: "x"};
    const player2 = {name: "PlayerTwo", sign: "o" };
    let one = player1.sign;
    let two = player2.sign;
    return {one, two};
   
})();


const gameflow = (() => {
    let board = GameBoard.gameboard;
    let one = document.getElementById('one')
    let two = document.getElementById('two');
    let cells = document.getElementsByClassName('cells');
    let array = Array.from(cells);
    let i = 0;
    let j = 0;
    let game = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let divs = [];

    /* When UI is incorporated 'sign' will be replaced with if statements for each 
    player; playerX and playerY */ 
    const addSymbol = (row, col, sign) => {
        if(game[row][col] === '') {
            game[row][col] = sign;
        }
    }
    

    const placeMark = (sign) => {
        if(sign === players.one) {
            let x = "x";
            let o = "o";
            let values = [x, o];
            
            while(board.length < 9) {
                board.push(values[board.length % 2]);
            }
        }
        else if(sign === players.two) {
            let x = "x";
            let o = "o";
            let values = [o, x];
            
            while(board.length < 9) {
                board.push(values[board.length % 2]);
            }
            
        }

        array.forEach(cell => {
            cell.addEventListener('click', function() {
                if(cell.innerHTML === "") {
                    cell.innerHTML = board[i++];
                    let strings = cell.id;
                    let one = parseInt(strings.charAt(0));
                    let two = parseInt(strings.charAt(1));
                    addSymbol(one, two, cell.innerHTML);
                    // game.push(cell.innerHTML);
                    // console.log(strings, one, two);
                    
                    
                    

    

                }
                
            })
        });

        
        

    }

    const choosePlayer = () => {
        one.addEventListener('click', () => {
           placeMark(players.one);
        })
        two.addEventListener('click', () => {
            placeMark(players.two);
        })
        
        
        
    }

    return {choosePlayer, addSymbol, game, divs};
    
    

 
   
 
})();

// const PlayerSign = (() => {
//     //     let play = players();
//     //     let first = play.one;
//     //     let second = play.two;
//     //     console.log(first);
//     //     return {first, second};
//     // })

gameflow.choosePlayer();




