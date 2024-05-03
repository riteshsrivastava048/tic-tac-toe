const boxes = document.querySelectorAll(".boxes");
const reset = document.querySelector(".reset");
const hide = document.querySelector(".hide");
const msg = document.querySelector(".msg");
const newbtn = document.querySelector(".newbtn");
const newbtn2 = document.querySelector(".newbtn2");
const hide2 = document.querySelector(".hide2");
const sO = document.querySelector(".sO");
const sX = document.querySelector(".sX");
const finalresult = document.querySelector(".finalresult");
const finalbutton = document.querySelector(".finalbutton");
const hide3 = document.querySelector(".hide3");
console.log(hide3);
let turno = true;
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const checkWinner = () => {
    let winnerFound = false;

    for (const pattern of winPatterns) {
        const [pos1, pos2, pos3] = pattern;
        const post1 = boxes[pos1].innerText;
        const post2 = boxes[pos2].innerText;
        const post3 = boxes[pos3].innerText;

        if (post1 && post1 === post2 && post2 === post3) {
            showWinner(post1);
            disableBoxes();
            countWinner(post1);
            winnerFound = true;
            break;
        }
    }

    if (!winnerFound && count === 9) {
        showDraw();
        disableBoxes();
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    hide.classList.remove("hide");
};

const showDraw = () => {
    msg.innerText = "It's a Draw!";
    hide2.classList.remove("hide2");
    
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const greset = () => {
    turno = true;
    enableBoxes();
    hide.classList.add("hide");
    hide2.classList.add("hide2");
    hide3.classList.add("hide3");
    count = 0;
};

newbtn.addEventListener("click", greset);
newbtn2.addEventListener("click", greset);
reset.addEventListener("click", greset);

let scoreO = 0;
let scoreX = 0;

const countWinner = (winner) => {
    if (winner === "O") {
        scoreO++;
        sO.innerText = scoreO;
    } else {
        scoreX++;
        sX.innerText = scoreX;
    }
    if(scoreO > scoreX){
        finalresult.innerText="Winner is O" ;
    }
    if(scoreX > scoreO){
        finalresult.innerText="Winner is X" ;
    }
    if(scoreX == scoreO){
        finalresult.innerText="Draw";
    }
};

finalbutton.addEventListener("click",() => {
    hide3.classList.remove("hide3");
    console.log("Hello");
})

