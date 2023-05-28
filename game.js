const GameBoard = (() => {
    let gameboard = [];
    return {gameboard};

})();

const players = (() => {
    const player1 = {name: '', sign: "x"};
    const player2 = {name: '', sign: "o" };
    let one = player1.sign;
    let two = player2.sign;
    let nameX = player1.name;
    let nameO = player2.name
    return {one, two, player1, player2, nameX, nameO};
   
})();


const gameflow = (() => {
    let newBoard = [];
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
    const nameX = document.getElementById('player-name-x');
    const nameO = document.getElementById('player-name-o');
    let origiBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let chosenPlayer = '';

    // // ai 
    // let aiPlayer = 'o';

    // // human
    // let huPlayer = 'x';

    // function getEmptyIndex(board) {
    //     return board.filter(s => s !== "o" && s !== "x");
    // }

    // function getWinningCombination(board, player) {
    //     if (
    //         (board[0] === player && board[1] === player && board[2] === player) ||
    //         (board[3] === player && board[4] === player && board[5] === player) ||
    //         (board[6] === player && board[7] === player && board[8] === player) ||
    //         (board[0] === player && board[3] === player && board[6] === player) ||
    //         (board[1] === player && board[4] === player && board[7] === player) ||
    //         (board[2] === player && board[5] === player && board[8] === player) ||
    //         (board[0] === player && board[4] === player && board[8] === player) ||
    //         (board[2] === player && board[4] === player && board[6] === player)

    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // function minimax(newBoard, player) {
    //     // available spots
    //     let availSpots = getEmptyIndex(newBoard);

    //     if(getWinningCombination(newBoard, huPlayer)) {
    //         return {score: -10};
    //     } else if(getWinningCombination(newBoard, aiPlayer)) {
    //         return {score: 10};
    //     } else if(availSpots.length === 0) {
    //         return {score: 0};
    //     }

    //     let moves = [];

    //     for(let i = 0; i < availSpots.length; i++) {
    //         let move = {};
    //         move.index = newBoard[availSpots[i]];
            
    //         // set the empty spot to the current player
    //         newBoard[availSpots[i]] = player;

    //         /*collect the score resulted from calling minimax on the current player's opponent */
    //         if(player === aiPlayer) {
    //             let result = minimax(newBoard, huPlayer);
    //             move.score = result.score;
    //         }
    //         else {
    //             let result = minimax(newBoard, aiPlayer);
    //             move.score = result.score;
    //         }

    //         // reset the spot to empty
    //         newBoard[availSpots[i]] = move.index;

    //         // push the object to the array
    //         moves.push(move);
    //     }

    //     let bestMove;
    //     if(player === aiPlayer) {
    //         let bestScore = -10000;
    //         for(let i = 0; i < moves.length; i++) {
    //             if(moves[i].score > bestScore) {
    //                 bestScore =  moves[i].score;
    //                 bestMove = i;
    //             }
    //         }
    //     } else {
    //         let bestScore = 10000;
    //         for(let i = 0; i < moves.length; i++) {
    //             if(moves[i].score < bestScore) {
    //                 bestScore = moves[i].score;
    //                 bestMove = i;
    //             }
    //         }
    //     }
        
    //     return moves[bestMove];
    // }

    /* When UI is incorporated 'sign' will be replaced with if statements for each 
    player; playerX and playerY */ 

    // const resetBoard = () => {
    //     board = [];

    // }
    const resetBoardO = () => {
        board = [];

    }
    const addSymbol = (row, col, sign) => {
        if(game[row][col] === '') {
            game[row][col] = sign;
        }
    }

    const enterName = () => {
        let one = document.getElementById('one');
        let two = document.getElementById('two');
        players.player1.name = one.value;
        players.player2.name = two.value;
        


    }


    const getWinner = (...sign) => {
        let one = document.getElementById('one');
        // Horizontal
        // console.log(sign, sign[0], sign[1]);
        // console.log(game);
        // getHorizontal(players.one);
        if(sign[0] === game[0][0] && sign[0] === game[0][1] && sign[0] === game[0][2]) {
            getPopup(players.nameX)
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();
            // array.forEach(cell => {
            //     cell.addEventListener('click', function(event){
            //         event.preventDefault();
                    
            //     })
            // })
            // console.log(`sign: ${sign[0]}, `)

        }
        if(sign[0] === game[1][0] && sign[0] === game[1][1] && sign[0] === game[1][2]) {
            // console.log(`${sign[0]} won`);
            getPopup(players.nameX)
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        if(sign[0] === game[2][0] && sign[0] === game[2][1] && sign[0] === game[2][2]) {
            // console.log(`${sign[0]} won`);
            getPopup(players.nameX)
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }

        // Player 2
        if(sign[1] === game[0][0] && sign[1] === game[0][1] && sign[1] === game[0][2]) {
            // console.log(`${sign[1]} won`);
            getPopup(players.nameO);;
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        
        if(sign[1] === game[1][0] && sign[1] === game[1][1] && sign[1] === game[1][2]) {
            // console.log(`${sign[1]} won`);
            getPopup(players.nameO);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        if(sign[1] === game[2][0] && sign[1] === game[2][1] && sign[1] === game[2][2]) {
            // console.log(`${sign[1]} won`);
            getPopup(players.nameO);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }

        /* Vertical */
        if(sign[0] === game[0][0] && sign[0] === game[1][0] && sign[0] === game[2][0]) {
            // console.log("x won");
            getPopup(players.nameX);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        if(sign[0] === game[0][1] && sign[0] === game[1][1] && sign[0] === game[2][1]) {
            // console.log("x won");
            getPopup(players.nameX);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        if(sign[0] === game[0][2] && sign[0] === game[1][2] && sign[0] === game[2][2]) {
            // console.log("x won");
            getPopup(players.nameX);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        // Player 2
        if(sign[1] === game[0][0] && sign[1] === game[1][0] && sign[1] === game[2][0]) {
            // console.log("o won");
            getPopup(players.nameO);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        if(sign[1] === game[0][1] && sign[1] === game[1][1] && sign[1] === game[2][1]) {
            // console.log("o won");
            getPopup(players.nameO);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        if(sign[1] === game[0][2] && sign[1] === game[1][2] && sign[1] === game[2][2]) {
            // console.log("o won");
            getPopup(players.nameO);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }

        /* Diagonally */
        if(sign[0] === game[0][0] && sign[0] === game[1][1] && sign[0] === game[2][2]) {
            // console.log("x won");
            getPopup(players.nameX);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        if(sign[0] === game[0][2] && sign[0] === game[1][1] && sign[0] === game[2][0]) {
            // console.log("x won");
            getPopup(players.nameX);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        // Player 2
        if(sign[1] === game[0][0] && sign[1] === game[1][1] && sign[1] === game[2][2]) {
            // console.log("o won");
            getPopup(players.nameO);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();

        }
        if(sign[1] === game[0][2] && sign[1] === game[1][1] && sign[1]=== game[2][0]) {
            // console.log("o won");
            getPopup(players.nameO);
            stopClick();
            toggleModal();
            value = true;
            // resetBoard();
            

            


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

    let aiPlayer = 'o';

    let huPlayer = 'x';
    
    

    const placeMark = (sign) => {
        let counter = [];
        let i = 0;


        // else if (nameX.value !== "" && nameO.value !== "") {
            
        // }

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

        

        
        
        

    }

    function clickHandler(sign) {
        array.forEach(cell => {
            cell.addEventListener('click', function() {
                if(cell.innerHTML === "") {
                    if(nameX.value !== "" && nameO.value !== "") {
                        cell.innerHTML = board.shift();
                        let strings = cell.id;
                        let one = parseInt(strings.charAt(0));
                        let two = parseInt(strings.charAt(1));
                        addSymbol(one, two, cell.innerHTML);
                        getWinner(players.one, players.two);
                        checkTie();
                        enterName();
                    }
                    

                    if(nameX.value === "" || nameO.value === "") {
                        if(sign === players.one) {
                            let items = ['x', 'o'];
                            let empty;
                            cell.innerHTML = items[0];
                            updateOrigi();
                            playComputer('o');
                            // console.log(getEmptyIndex(origiBoard))
                            // for(let i = 0; i < array.length; i++) {
                            //     if(array[i].innerHTML === "x") {
                            //         let index 
                                    

                            //     }
                            //     break
                            // }
                            
                            let strings = cell.id;
                            let one = parseInt(strings.charAt(0));
                            let two = parseInt(strings.charAt(1));
                            getWinner(players.one, players.two);
                            checkTie();
                            enterName();
            
                        }
                        if(sign === players.two) {
                            huPlayer = 'o';
                            aiPlayer = 'x'
                            let items = ['o', 'x'];
                            cell.innerHTML = items[0];
                            updateOrigi();
                            playComputer('x');
                            let strings = cell.id;
                            let one = parseInt(strings.charAt(0));
                            let two = parseInt(strings.charAt(1));
                            // addSymbol(one, two, cell.innerHTML);
                            getWinner(players.one, players.two);
                            checkTie();
                            enterName();
                            
                        }
                    }
                    
                    
                    

    

                }
                
            })
        });
    }

    // ai 
    // let aiPlayer = 'o';

    // human
    // let huPlayer = 'x';

    function getEmptyIndex(board) {
        return board.filter(s => s !== "o" && s !== "x");
    }

    function getWinningCombination(board, player) {
        if (
            (board[0] === player && board[1] === player && board[2] === player) ||
            (board[3] === player && board[4] === player && board[5] === player) ||
            (board[6] === player && board[7] === player && board[8] === player) ||
            (board[0] === player && board[3] === player && board[6] === player) ||
            (board[1] === player && board[4] === player && board[7] === player) ||
            (board[2] === player && board[5] === player && board[8] === player) ||
            (board[0] === player && board[4] === player && board[8] === player) ||
            (board[2] === player && board[4] === player && board[6] === player)

        ) {
            return true;
        } else {
            return false;
        }
    }

    function minimax(newBoard, player) {
        // available spots
        let availSpots = getEmptyIndex(newBoard);

        if(getWinningCombination(newBoard, huPlayer)) {
            return {score: -10};
        } else if(getWinningCombination(newBoard, aiPlayer)) {
            return {score: 10};
        } else if(availSpots.length === 0) {
            return {score: 0};
        }

        let moves = [];

        for(let i = 0; i < availSpots.length; i++) {
            let move = {};
            move.index = newBoard[availSpots[i]];
            
            // set the empty spot to the current player
            newBoard[availSpots[i]] = player;

            /*collect the score resulted from calling minimax on the current player's opponent */
            if(player === aiPlayer) {
                let result = minimax(newBoard, huPlayer);
                move.score = result.score;
            }
            else {
                let result = minimax(newBoard, aiPlayer);
                move.score = result.score;
            }

            // reset the spot to empty
            newBoard[availSpots[i]] = move.index;

            // push the object to the array
            moves.push(move);
        }

        let bestMove;
        if(player === aiPlayer) {
            let bestScore = -10000;
            for(let i = 0; i < moves.length; i++) {
                if(moves[i].score > bestScore) {
                    bestScore =  moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            for(let i = 0; i < moves.length; i++) {
                if(moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        
        return moves[bestMove];
    }

    const playComputer = (aiPlayer) => {
        let empty = getEmptyIndex(origiBoard);
        let mini = minimax(origiBoard, aiPlayer).index;
        let moves = minimax(origiBoard, aiPlayer);
        for(let i = 0; i <= array.length; i++) {
            if(array[i].textContent === "" && value !== true) {
                console.log(mini);
                console.log(moves);
                array[mini].textContent = aiPlayer;
                break;
            }
            
            // else if(array[i].textContent !== "") {
            //     break
            // }
            
        }
        if(minimax(origiBoard, aiPlayer).score === 10) {
            stopClick();
            document.getElementById('popup').innerHTML = "You Lose!";
            toggleModal();
        }
        // else if(minimax(origiBoard, aiPlayer) === -10) {
        //     getPopup(players.nameX);
        // }
        if (minimax(origiBoard, aiPlayer).score === 0 && empty.length < 3) {
            stopClick();
            document.getElementById('popup').innerHTML = "Tie Game!";
            toggleModal();
        }
        // console.log("score: " + minimax(origiBoard, aiPlayer).score);
        // console.log("length: " + empty.length);
        // getWinner(players.one, players.two);
        // if(value !== true) {
            

        // }
        
        
        

    }
    const playComputer2 = (items) => {
        // getWinner(players.one, players.two);
        if(value !== true) {
            for(let i = 0; i < array.length; i++) {
                if(!array[i].textContent) {
                    array[i]. textContent = items;
                    break;
                }
            }

        }
        
        
        
    }

    const updateOrigi = () => {

        for(let i = 0; i < Math.min(array.length, origiBoard.length); i++){
            if(origiBoard[i] === array.indexOf(array[i]) && array[i].innerHTML !== ""){
                origiBoard[i] = array[i].innerHTML;
                if(array[i].innerHTML === "") {
                    break

                }
               

            }
            
            
        }
        // console.log(origiBoard);
        
        
    }
    

    const choosePlayer = () => {
        one.addEventListener('click', () => {
           placeMark(players.one);
           clickHandler(players.one);
           chosenPlayer = "x";
        //    replayGame();
           
        //    console.log(chosenPlayer);
        //    enterName();
        })
        two.addEventListener('click', () => {
            // replayGame()
            placeMark(players.two);
            clickHandler(players.two);
            chosenPlayer = "o";
            
            // console.log(chosenPlayer);
            // enterName();
        });
        
        
        
        
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
            document.getElementById('popup').innerHTML = "Tie Game!";
            toggleModal();
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

    // const goBack = (back, a, b, c) => {
    //     back.addEventListener('click', function() {
    //         a.style.display = "inline";
    //         b.style.display = "inline";
    //         array.forEach(player => {
    //             player.style.display = "none";
    //         })


    //     })
    //     // a.addEventListener('click', function () {
    //     //     a.style.display = "none";
    //     //     b.style.display = "none";
    //     //     array.forEach(player => {
    //     //         player.style.display = "block";
    //     //     })

    //     // })
        
        
    // }

    const displayPages = () => {
        const multi = document.getElementById("multi");
        const single = document.getElementById("single");
        const gamers = document.getElementsByClassName('players');
        const array = Array.from(gamers);
        // const back = document.getElementById('back');
        const one = document.getElementById('one');
        const two = document.getElementById('two');
        const cont = document.getElementById('continue');
        const names = Array.from(document.getElementsByClassName('player-names'));
        const start = document.getElementById('start');
        // const nameX = document.getElementById('player-name-x');
        const nameO = document.getElementById('player-name-o');
        // const inner = Array.from(document.getElementsByClassName('cells'));
        const inner = Array.from(document.getElementsByClassName('container-inner'));
        // const playerX = document.getElementById('')
        // const singles = Array.
        multi.addEventListener('click', function () {
            multi.style.display = "none";
            single.style.display = "none";
            one.style.display = "inline-block"; 
            two.style.display = "inline-block";
            cont.style.display = "inline-block";
            // array.forEach(player => {
            //     player.style.display = "block";
            // });

        })
        single.addEventListener('click', function () {
            multi.style.display = "none";
            single.style.display = "none";
            one.style.display = "inline-block"; 
            two.style.display = "inline-block";
            getSingle(cont, start, one, two, nameO, inner);
            
            // array.forEach(player => {
            //     if(player.id !== 'continue') {
            //         player.style.display = "block";

            //     }
            //     // player.style.display = "block";
            // });
            // getSingle(cont, singles, start)

        })
        cont.addEventListener('click', function() {
            if(board.length !== 0) {
                one.style.display = "none";
                two.style.display = "none";
                // array.forEach(player => {
                //     player.style.display = "none";
                // })
                // back.style.display = "none";
                cont.style.display = "none";
                nameX.style.display = "inline-block";
                nameO.style.display = "inline-block";
                document.getElementById('prompt').style.display = "inline-block";
                start.style.display = "inline-block";
                start.addEventListener('click', function() {
                    if(nameX.value !== '' && nameO.value !== '') {
                        players.nameX = `${nameX.value}`
                        players.nameO = nameO.value;
                        // console.log(players.nameX);
                        names.forEach(name => {
                            name.style.display = "none";
                        })
                        // inner.style.display = "grid";
                        inner.forEach(item => {
                            item.style.display = "grid";
                        })
        
                    }
                });
                // names.forEach(name => {
                //     name.style.display = "inline-block";
                // })

            }
            


        });
        
        // start.addEventListener('click', function() {
        //     if(nameX.value !== '' && nameO.value !== '') {
        //         players.nameX = `${nameX.value}`
        //         players.nameO = nameO.value;
        //         // console.log(players.nameX);
        //         names.forEach(name => {
        //             name.style.display = "none";
        //         })
        //         // inner.style.display = "grid";
        //         inner.forEach(item => {
        //             item.style.display = "grid";
        //         })

        //     }
        // });

        // back.addEventListener('click', function() {
        //     multi.style.display = "inline";
        //     single.style.display = "inline";
        //     array.forEach(player => {
        //         player.style.display = "none";
        //     })
        //     game = [];


        // });
        
    }

    const getPopup = (player) => {
        const popup = document.getElementById('popup');
        popup.innerHTML = `${player} wins!`

    }

    const getSingle = (cont, start, one, two, nameO, inner) => {
        cont.addEventListener('click', function() {
            if(board.length !== 0) {
                array.forEach(player => {
                    player.style.display = "none";
                })
                // back.style.display = "none";
                cont.style.display = "none";
                // singles.forEach(name => {
                //     name.style.display = "inline-block";
                // })

            }
            


        });

        start.addEventListener('click', function() {
            if(nameX.value !== '' || nameO.value !== '') {
                players.nameX = `${nameX.value}`
                players.nameO = nameO.value;
                nameO.style.display = 'none';
                nameX.style.display = 'none';
                start.style.display = 'none';
                // console.log(players.nameX);
                // names.forEach(name => {
                //     name.style.display = "none";
                // })
                // inner.style.display = "grid";
                inner.forEach(item => {
                    item.style.display = "grid";
                })

            }
        });

        one.addEventListener('click', function(){
            nameX.style.display = "inline";
            one.style.display = "none"; 
            two.style.display = "none";
            nameX.style.display = "inline-block";
            start.style.display = "inline-block";
        })

        two.addEventListener('click', function(){
            nameO.style.display = "inline";
            one.style.display = "none"; 
            two.style.display = "none";
            nameO.style.display = "inline-block";
            start.style.display = "inline-block";
        })
    }

    const toggleModal = () => {
        const containerOuter = document.querySelector('.container-outer');
        const modalWrapper = document.querySelector('.modal-wrapper');
        const modalButton = document.querySelector('.modal-toggle');
        modalWrapper.style.display = "flex";

    }

    const replayGame = () => {
        const modalWrapper = document.querySelector('.modal-wrapper');
        const replay = document.getElementById('replay');
        replay.addEventListener('click', () => {
            modalWrapper.style.display = "none";
            array.forEach(cell => {
                cell.innerHTML = "";
            });
            document.getElementById('popup').innerHTML = "";
            origiBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            array.forEach(cell => {
                cell.style.pointerEvents = 'auto';
                
            });
            for(let i = 0; i < game.length; i++){
                for(let j = 0; j < game.length; j++){
                    game[i][j] = "";
                }


            }
            board.length = 0;
            if(chosenPlayer === "x"){
                newBoard = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'o'];
                // console.log('x was chosen');
                // let x = "x";
                // let o = "o";
                // let values = [x, o];
                // while(newBoard.length < 9) {
                //     newBoard.push(values[newBoard.length % 2]);
                // }
                placeMark(players.one);
                // newBoard = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'o'];
            }
            if(chosenPlayer === "o") {
                // let x = "x";
                // let o = "o";
                // let values = [o, x];
            
                
                // while(newBoard.length < 9) {
                //     newBoard.push(values[newBoard.length % 2]);
                // }
                placeMark(players.two);
                // newBoard = ['o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o'];
            }



        });
        
    }

    const resetBoard = () => {
        board.length = 0;

    }
    
    // let origiBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    

    // let newBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // minimax(newBoard, huPlayer);
    displayPages();
    // choosePlayer();
    replayGame();
    
    // updateOrigi();

    

    // enterName();
    
    

    return {choosePlayer, addSymbol, game, divs, displayPages, chosenPlayer, replayGame, newBoard};
    
    

 
   
 
})();

// const PlayerSign = (() => {
//     //     let play = players();
//     //     let first = play.one;
//     //     let second = play.two;
//     //     console.log(first);
//     //     return {first, second};
//     // })

gameflow.choosePlayer();




