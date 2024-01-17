document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('.buttons');
    let turn = document.getElementById('turns');
    let replay=document.getElementById("reset");

    replay.addEventListener('click',()=>{reset();})

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            changeContent(button);
        });
    });



    function changeContent(button){
        if(turn.textContent==="Turn x"){
            button.textContent="x";
            turn.textContent="Turn O";
           
        }
        else{
            button.textContent="O";
            turn.textContent="Turn x";
            
        }
        button.disabled=true;
        button.style.color="black"
        const winner = checkWinner();
        if (winner) {
            highlightWinner();
            setTimeout(()=>{
                alert(`Player ${winner} wins!`);
            },100);
            
        }
    }
  
   
    function reset(){
        buttons.forEach(button=>{
            button.textContent=".";
            button.style.background="rgb(254, 254, 100)";
            button.disabled=false;
        })
    }

    function checkWinner() {
        const winningCombinations = [
            ['r1-b1', 'r1-b2', 'r1-b3'], // Horizontal top row
            ['r2-b1', 'r2-b2', 'r2-b3'], // Horizontal middle row
            ['r3-b1', 'r3-b2', 'r3-b3'], // Horizontal bottom row
            ['r1-b1', 'r2-b1', 'r3-b1'], // Vertical left column
            ['r1-b2', 'r2-b2', 'r3-b2'], // Vertical middle column
            ['r1-b3', 'r2-b3', 'r3-b3'], // Vertical right column
            ['r1-b1', 'r2-b2', 'r3-b3'], // Diagonal from top-left to bottom-right
            ['r1-b3', 'r2-b2', 'r3-b1']  // Diagonal from top-right to bottom-left
        ];
    
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            const buttonA = document.getElementById(a);
            const buttonB = document.getElementById(b);
            const buttonC = document.getElementById(c);
    
            if (buttonA.textContent !== '.' && buttonA.textContent === buttonB.textContent && buttonB.textContent === buttonC.textContent) {
                return buttonA.textContent; // Return the winner (either 'x' or 'O')
            }
        }
    
        return null; 
    }
    function highlightWinner(winner) {
        const winningCombinations = [
            ['r1-b1', 'r1-b2', 'r1-b3'], // Horizontal top row
            ['r2-b1', 'r2-b2', 'r2-b3'], // Horizontal middle row
            ['r3-b1', 'r3-b2', 'r3-b3'], // Horizontal bottom row
            ['r1-b1', 'r2-b1', 'r3-b1'], // Vertical left column
            ['r1-b2', 'r2-b2', 'r3-b2'], // Vertical middle column
            ['r1-b3', 'r2-b3', 'r3-b3'], // Vertical right column
            ['r1-b1', 'r2-b2', 'r3-b3'], // Diagonal from top-left to bottom-right
            ['r1-b3', 'r2-b2', 'r3-b1']  // Diagonal from top-right to bottom-left
        ];
    
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            const buttonA = document.getElementById(a);
            const buttonB = document.getElementById(b);
            const buttonC = document.getElementById(c);
    
            if (buttonA.textContent !== '.' && buttonA.textContent === buttonB.textContent && buttonB.textContent === buttonC.textContent) {
                buttonA.style.background = "green";
                buttonB.style.background = "green";
                buttonC.style.background = "green";
                return;
            }
        }
    }
    
});