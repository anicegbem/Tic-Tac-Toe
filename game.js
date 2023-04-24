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
    let rows = 3;
    let cols = 3;
    let value = '';

    /* When UI is incorporated 'sign' will be replaced with if statements for each 
    player; playerX and playerY */ 
    const addSymbol = (row, col, sign) => {
        if(game[row][col] === '') {
            game[row][col] = sign;
        }
    }

    const getHorizontal = (sign) => {
        if(sign[0] === game[0][0] && game[0][1] && game[0][2]) {
            console.log(`${sign[0]} won`)

        } 
        // else if (sign[1] === game[0][0] && game[0][1] && game[0][2]) {
        //     console.log("You won");
        // }
        // if(sign[0] === game[1][0] && game[1][1] && game[1][2]) {
        //     console.log("You won")

        // } else if (sign[1] === game[1][0] && game[1][1] && game[1][2]) {
        //     console.log("You won");

        // }
        // if(sign[0] === game[2][0] && game[2][1] && game[2][2]) {
        //     console.log("You won")

        // } else if (sign[1] === game[2][0] && game[2][1] && game[2][2]) {
        //     console.log("You won");

        // }

    }


    const getWinner = (...sign) => {
        // Horizontal
        // console.log(sign, sign[0], sign[1]);
        // console.log(game);
        // getHorizontal(players.one);
        if(sign[0] === game[0][0] && sign[0] === game[0][1] && sign[0] === game[0][2]) {
            console.log(`${sign[0]} won`);
            stopClick();
            value = true;
            // array.forEach(cell => {
            //     cell.addEventListener('click', function(event){
            //         event.preventDefault();
                    
            //     })
            // })
            // console.log(`sign: ${sign[0]}, `)

        }
        if(sign[0] === game[1][0] && sign[0] === game[1][1] && sign[0] === game[1][2]) {
            console.log(`${sign[0]} won`);
            stopClick();
            value = true;

        }
        if(sign[0] === game[2][0] && sign[0] === game[2][1] && sign[0] === game[2][2]) {
            console.log(`${sign[0]} won`);
            stopClick();
            value = true;

        }

        // Player 2
        if(sign[1] === game[0][0] && sign[1] === game[0][1] && sign[1] === game[0][2]) {
            console.log(`${sign[1]} won`);
            stopClick();
            value = true;

        }
        
        if(sign[1] === game[1][0] && sign[1] === game[1][1] && sign[1] === game[1][2]) {
            console.log(`${sign[1]} won`);
            stopClick();
            value = true;

        }
        if(sign[1] === game[2][0] && sign[1] === game[2][1] && sign[1] === game[2][2]) {
            console.log(`${sign[1]} won`);
            stopClick();
            value = true;

        }

        /* Vertical */
        if(sign[0] === game[0][0] && sign[0] === game[1][0] && sign[0] === game[2][0]) {
            console.log("x won");
            stopClick();
            value = true;

        }
        if(sign[0] === game[0][1] && sign[0] === game[1][1] && sign[0] === game[2][1]) {
            console.log("x won");
            stopClick();
            value = true;

        }
        if(sign[0] === game[0][2] && sign[0] === game[1][2] && sign[0] === game[2][2]) {
            console.log("x won");
            stopClick();
            value = true;

        }
        // Player 2
        if(sign[1] === game[0][0] && sign[1] === game[1][0] && sign[1] === game[2][0]) {
            console.log("o won");
            stopClick();
            value = true;

        }
        if(sign[1] === game[0][1] && sign[1] === game[1][1] && sign[1] === game[2][1]) {
            console.log("o won");
            stopClick();
            value = true;

        }
        if(sign[1] === game[0][2] && sign[1] === game[1][2] && sign[1] === game[2][2]) {
            console.log("o won");
            stopClick();
            value = true;

        }

        /* Diagonally */
        if(sign[0] === game[0][0] && sign[0] === game[1][1] && sign[0] === game[2][2]) {
            console.log("x won");
            stopClick();
            value = true;

        }
        if(sign[0] === game[0][2] && sign[0] === game[1][1] && sign[0] === game[2][0]) {
            console.log("x won");
            stopClick();
            value = true;

        }
        // Player 2
        if(sign[1] === game[0][0] && sign[1] === game[1][1] && sign[1] === game[2][2]) {
            console.log("o won");
            stopClick();
            value = true;

        }
        if(sign[1] === game[0][2] && sign[1] === game[1][1] && sign[1]=== game[2][0]) {
            console.log("o won");
            stopClick();
            value = true;
            

            


        }

        // return {value};

        
        
        // for(const sign of signs) {
        //     /* Horizontal */
        //     if(sign === game[0][0] && game[0][1] && game[0][2]) {
        //         console.log("You won")
    
        //     }
        //     if(sign === game[1][0] && game[1][1] && game[1][2]) {
        //         console.log("You won")
    
        //     }
        //     if(sign === game[2][0] && game[2][1] && game[2][2]) {
        //         console.log("You won")
    
        //     }
    
        //     /* Vertical */
        //     if(sign === game[0][0] && game[1][0] && game[2][0]) {
        //         console.log("You won")
    
        //     }
        //     if(sign === game[0][1] && game[1][1] && game[2][1]) {
        //         console.log("You won")
    
        //     }
        //     if(sign === game[0][2] && game[1][2] && game[2][2]) {
        //         console.log("You won")
    
        //     }
    
        //     /* Diagonally */
        //     if(sign === game[0][0] && game[1][1] && game[2][2]) {
        //         console.log("You won")
    
        //     }
        //     if(sign === game[0][2] && game[1][1] && game[2][0]) {
        //         console.log("You won")
    
        //     }

        // }
        
        // if(sign === game[2][0] && game[2][1] && game[2][2]) {
        //     console.log("You won")

        // }


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
                    getWinner(players.one, players.two);
                    checkTie();
                    

                    // console.log(game);
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

    const stopClick = () => {
        array.forEach(cell => {
            cell.style.pointerEvents = 'none';
            // cell.addEventListener('click', function(event){
            //     // event.preventDefault();
                
            // })
        })
    }

    const checkTie = () => {
        // let winner = getWinner(players.one, players.two);
        // let value = winner.value;
        let one = game[0].every(checkArray);
        let two = game[1].every(checkArray);
        let three = game[2].every(checkArray);
        if(one === true && two === true && three === true && value !== true){
            console.log('tie game');
        }
        // game.forEach(g => {
        //     if(g.every(checkArray) === true) {
        //         console.log('tie game');
        //     }
        // })

        function checkArray(element) {
            return element !== "";

        }
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




