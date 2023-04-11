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
    // // let value = playerSign();
    // let play = players();
    // let i = 0;
    // let cells = [];
    // if(board.length < 9) {
    //     board.push(sign); 
        
        
        
    // }

    /* When UI is incorporated 'sign' will be replaced with if statements for each 
    player; playerX and playerY */ 
    

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

    }

    return {placeMark};
    
    

 
   
 
})();

// const PlayerSign = (() => {
//     //     let play = players();
//     //     let first = play.one;
//     //     let second = play.two;
//     //     console.log(first);
//     //     return {first, second};
//     // })

gameflow.placeMark(players.one)



