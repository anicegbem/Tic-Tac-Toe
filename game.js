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
    let board = GameBoard.gameboard;
    let one = document.getElementById('one')
    let two = document.getElementById('two');
    let cells = document.getElementsByClassName('cells');
    let array = Array.from(cells);
    let game = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let value = '';
    let origiBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let chosenPlayer = '';
    let opp = '';

    
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
        if(sign[0] === game[0][0] && sign[0] === game[0][1] && sign[0] === game[0][2]) {
            getPopup(players.nameX)
            stopClick();
            toggleModal();
            value = true;

        }
        if(sign[0] === game[1][0] && sign[0] === game[1][1] && sign[0] === game[1][2]) {
            getPopup(players.nameX)
            stopClick();
            toggleModal();
            value = true;
            

        }
        if(sign[0] === game[2][0] && sign[0] === game[2][1] && sign[0] === game[2][2]) {
            
            getPopup(players.nameX)
            stopClick();
            toggleModal();
            value = true;
            

        }

        // Player 2
        if(sign[1] === game[0][0] && sign[1] === game[0][1] && sign[1] === game[0][2]) {
            
            getPopup(players.nameO);;
            stopClick();
            toggleModal();
            value = true;
            

        }
        
        if(sign[1] === game[1][0] && sign[1] === game[1][1] && sign[1] === game[1][2]) {
            
            getPopup(players.nameO);
            stopClick();
            toggleModal();
            value = true;
           

        }
        if(sign[1] === game[2][0] && sign[1] === game[2][1] && sign[1] === game[2][2]) {
            
            getPopup(players.nameO);
            stopClick();
            toggleModal();
            value = true;
            

        }

        /* Vertical */
        if(sign[0] === game[0][0] && sign[0] === game[1][0] && sign[0] === game[2][0]) {
            
            getPopup(players.nameX);
            stopClick();
            toggleModal();
            value = true;
            

        }
        if(sign[0] === game[0][1] && sign[0] === game[1][1] && sign[0] === game[2][1]) {
            
            getPopup(players.nameX);
            stopClick();
            toggleModal();
            value = true;
            

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

        

    }
    
    let aiPlayer = 'o';

    let huPlayer = 'x';
    
    

    const placeMark = (sign) => {
        let i = 0;



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
        const nameX = document.getElementById('player-name-x');
        const nameO = document.getElementById('player-name-o');
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
                            cell.innerHTML = chosenPlayer;
                            updateOrigi();
                            playComputer(opp);
                            
                            getWinner(players.one, players.two);
                            checkTie();
                            enterName();
            
                        }
                        if(sign === players.two) {
                            cell.innerHTML = chosenPlayer;
                            updateOrigi();
                            playComputer(opp);
                            getWinner(players.one, players.two);
                            checkTie();
                            enterName();
                            
                        }
                    }
                    
                    
                    

    

                }
                
            })
        });
    }



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
            
            
        }
        if(minimax(origiBoard, aiPlayer).score === 10) {
            stopClick();
            document.getElementById('popup').innerHTML = "You Lose!";
            toggleModal();
        }
        if(minimax(origiBoard, aiPlayer).score === -10) {
            stopClick();
            document.getElementById('popup').innerHTML = "You Lose!";
            toggleModal();
        }
        
        if (minimax(origiBoard, aiPlayer).score === 0 && empty.length < 3) {
            stopClick();
            document.getElementById('popup').innerHTML = "Tie Game!";
            toggleModal();
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
       
        
        
    }
    

    const choosePlayer = () => {
        one.addEventListener('click', () => {
           placeMark(players.one);
           clickHandler(players.one);
           chosenPlayer = "x";
           opp = "o";
        })
        two.addEventListener('click', () => {
            placeMark(players.two);
            clickHandler(players.two);
            chosenPlayer = "o";
            opp = "x";
            
        });
        
        
        
        
    }

    const stopClick = () => {
        array.forEach(cell => {
            cell.style.pointerEvents = 'none';
        })
    }

    const checkTie = () => {
        let one = game[0].every(checkArray);
        let two = game[1].every(checkArray);
        let three = game[2].every(checkArray);
        if(one === true && two === true && three === true && value !== true){
            document.getElementById('popup').innerHTML = "Tie Game!";
            toggleModal();
        }

        function checkArray(element) {
            return element !== "";

        }
    }

    
    const clickSingle = (multi, single, one, two, start, inner, nameX, nameO) => {
        choice = "single"
        multi.style.display = "none";
        single.style.display = "none";
        one.style.display = "inline-block"; 
        two.style.display = "inline-block";
        getSingle(start, inner, nameX, nameO);
        
        

    }

    const clickMulti = (multi, single, one, two, start, names, inner, nameX, nameO) => {
        choice = "multi";
        multi.style.display = "none";
        single.style.display = "none";
        one.style.display = "inline-block"; 
        two.style.display = "inline-block";
        getMulti(start, inner, nameX, nameO);
        
       

    }

    

    const getPopup = (player) => {
        const popup = document.getElementById('popup');
        popup.innerHTML = `${player} wins!`

    }

    const getMulti = (start, inner, nameX, nameO) => {
        document.getElementById('one').addEventListener('click', function(){
            if(board.length !== 0) {
                one.style.display = "none";
                two.style.display = "none";
                nameX.style.display = "inline-block";
                nameO.style.display = "inline-block";
                document.getElementById('prompt').style.display = "inline-block";
                start.style.display = "inline-block";
                
                

            }
            
        })

        document.getElementById('two').addEventListener('click', function(){
            if(board.length !== 0) {
                one.style.display = "none";
                two.style.display = "none";
                nameX.style.display = "inline-block";
                nameO.style.display = "inline-block";
                document.getElementById('prompt').style.display = "inline-block";
                start.style.display = "inline-block";
                
                

            }
        })
        start.addEventListener('click', function() {
            if(nameX.value !== '' && nameO.value !== '') {
                players.nameX = `${nameX.value}`
                players.nameO = nameO.value;
                nameX.style.display = "none";
                nameO.style.display = "none";
                start.style.display = "none";
                document.getElementById('prompt').style.display = "none";
                inner.forEach(item => {
                    item.style.display = "grid";
                })

            }
        });

    }

    const getSingle = (start, inner, nameX, nameO) => {
        document.getElementById('one').addEventListener('click', function(){
            
            nameX.style.display = "inline";
            document.getElementById('one').style.display = "none"; 
            document.getElementById('two').style.display = "none";
            nameX.style.display = "inline-block";
            start.style.display = "inline-block";

            
            
        });

        document.getElementById('two').addEventListener('click', function(){
            nameO.style.display = "inline";
            one.style.display = "none"; 
            two.style.display = "none";
            nameO.style.display = "inline-block";
            start.style.display = "inline-block";
            
            
            
        });

        start.addEventListener('click', function() {
            if(nameX.value !== '' || nameO.value !== '') {
                players.nameX = `${nameX.value}`
                players.nameO = nameO.value;
                nameO.style.display = 'none';
                nameX.style.display = 'none';
                start.style.display = 'none';
                document.getElementById('prompt').style.display = "none";
                inner.forEach(item => {
                    item.style.display = "grid";
                })

            }
        });

        

        
    }

    

    const toggleModal = () => {
        const modalWrapper = document.querySelector('.modal-wrapper');
        modalWrapper.style.display = "flex";

    }

    const newGame = () => {
        const inner = Array.from(document.getElementsByClassName('container-inner'));
        inner.forEach(item => {
            item.style.display = "none";
        });
        multi.style.display = "inline-block";
        single.style.display = "inline-block";

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
                placeMark(players.one);
                
            }
            if(chosenPlayer === "o") {
                placeMark(players.two);
               
            }



        });
        
    }

    const restartGame = () => {
        const nameX = document.getElementById('player-name-x');
        const nameO = document.getElementById('player-name-o');
        let restart = document.getElementById('restart');
        const modalWrapper = document.querySelector('.modal-wrapper');
       
       

        restart.addEventListener('click', () => {
            newGame();
            nameX.value = "";
            nameO.value = "";

            chosenPlayer = "";
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
                placeMark(players.one);
                
                
                
            }
            if(chosenPlayer === "o") {
                placeMark(players.two);
                
        
                
            }

        })
        
            

    
        
    }

    const startGame = () => {
        const multi = document.getElementById("multi");
        const single = document.getElementById("single");
        const one = document.getElementById('one');
        const two = document.getElementById('two');
        const names = Array.from(document.getElementsByClassName('player-names'));
        const start = document.getElementById('start');
        const inner = Array.from(document.getElementsByClassName('container-inner'));
        const nameX = document.getElementById('player-name-x');
        const nameO = document.getElementById('player-name-o');
        

        single.addEventListener('click', () => {
            clickSingle(multi, single, one, two, start, inner, nameX, nameO);

        })
        
        multi.addEventListener('click', () => {
            clickMulti(multi, single, one, two, start, names, inner, nameX, nameO);

        });

        
        
    }

    replayGame();
    restartGame();
    
    choosePlayer();
    
    
    

    return {startGame};
    
    

 
   
 
})();

gameflow.startGame();




