const GameBoard = (() => {
    let gameboard = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
    let cells = document.getElementsByClassName("cells");
    let array = Array.from(cells);
    let i = 0;
    const playGame = () => {
        array.forEach(cell => {
            cell.addEventListener('click', function() {
                if(cell.innerHTML === "") {
                    cell.innerHTML = gameboard[i++];

                }
                
            })
        });
        
        
        
    }
    return {playGame};

})();

GameBoard.playGame();