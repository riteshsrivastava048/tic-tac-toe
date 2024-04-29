let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector(".reset");
let hide = document.querySelector(".hide");
let msg = document.querySelector(".msg");
let newbtn = document.querySelector(".newbtn");
let newbtn2 = document.querySelector(".newbtn2");
let hide2 = document.querySelector(".hide2");
let turno = true ;
let winpattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count = 0 ;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turno){
        box.innerText="O";
        turno = false;
        }
        else{
            box.innerText="X";
        turno = true ;
        }
        box.disabled = true;

        checkwinner();
    })
})



const checkwinner = () => {
    for(pattern of winpattern){
     let post1 = boxes[pattern[0]].innerText;
     let post2 = boxes[pattern[1]].innerText;
     let post3 = boxes[pattern[2]].innerText;

     if(post1 != "" && post2 != "" && post3 != ""){
        if(post1 == post2 && post2 == post3){
            console.log("Winner");
            showWinner(post1);
            disablebtn();
        }
     }
     boxes.disabled = true ;
    } 
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        count++;
        if(count == 9){
            hide2.classList.remove("hide2");
        }
        });
});
const showWinner = (winner) => {
  msg.innerText = `Congrats,Winner is ${winner}` ;
  hide.classList.remove("hide");
}

const greset = () => {
    turno = true ;
    enablebtn();
    hide.classList.add("hide");
    hide2.classList.add("hide2");

}
const disablebtn = () => {
    for(let box of boxes){
        box.disabled = true ;
    }
}
const enablebtn = () => {
    for(let box of boxes){
        box.disabled = false ;
        box.innerText="";
    }
}

newbtn.addEventListener("click",greset);
newbtn2.addEventListener("click",greset);
reset.addEventListener("click",greset);

if(count == 9){
    console.log("Draw");
}
console.log(count);