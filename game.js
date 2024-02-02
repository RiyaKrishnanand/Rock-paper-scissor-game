let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let random = Math.floor(Math.random() * 3);
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let winModal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");


let play = document.querySelector(".play");
let again = document.querySelector(".again");
let replay = document.querySelector(".replay")


let lines = document.querySelector(".traingle-img");


let rule_btn = document.querySelector(".button-rule");
let show_rules = document.querySelector(".rule-div");

let rule_box = document.querySelector(".btn-div");
let rule_next_box = document.querySelector(".rule-nxt-con");


let youwin_style = document.querySelector(".styling-con-left");
let pcwin_style = document.querySelector(".styling-con-right");


// JS for User Score to store in local storage so that refreshing the page does not reset the score to 0
let score = JSON.parse(localStorage.getItem("sc"));
let scoreElem = document.getElementById("score");
if (score) {
    scoreElem.innerText = score;
}
let count = 0;

// JS for Computer Score
let csscore = JSON.parse(localStorage.getItem("cs"));
let csElem = document.getElementById("c-score");
if(csscore){
    csElem.innerText = csscore;
}
let cscount = 0;



con.forEach((element, index) => {

    //SHhows you picked message after user clicks on any one icon (Rock,Paper,Scissor) and removes lines
    element.addEventListener("click", () => {
        user.style.opacity = "1";
        lines.style.display = "none";

        //Remove remaing user icons after click and shows the selected option by user
        con.forEach(item => {
            item.style.display = "none";
        });
        element.style.display = "block";

        //Adds a class "show" which applies on con and displays the icon on the left side below you picked
        element.classList.add("show")

        //After 0.5 secs it will display pc picked message on scrren 
        setTimeout(() => {
            machine.style.opacity = "1";

            //Computer randomly pickes either (Rock,Paper,Scissor) and displays the selected icon on the right side below pc picked after 1 Sec
            setTimeout(() => {
                computer[random].style.display = "block";
                computer[random].classList.add("right");
            }, 1000);
        }, 500);

        //Game LOGIC for Tie,Win,Lose and displays either you win lose or tie message.
        setTimeout(() => {
            if (random == index) {
                winModal.style.display = "grid";
                winner.innerText = "TIE UP"
                replay.innerText = "REPLAY"
            }
            else if (index == 0 && random == 2 || index == 1 && random == 0 || index == 2 && random == 1) {
                winModal.style.display = "grid";
                rule_box.style.display = "none";
                rule_next_box.style.display = "flex";
                count=score;
                count++;
                localStorage.setItem("sc",JSON.stringify(count));
                scoreElem.innerText=count;
                youwin_style.style.opacity= "1";
                winner.innerText = "YOU WIN " < br > " AGAINST PC"
            }
            else {
                winModal.style.display = "grid";
                pcwin_style.style.opacity = "1";
                winner.innerText = "YOU LOSE";
                cscount=csscore;
                cscount++;
                localStorage.setItem("cs",JSON.stringify(cscount));
                csElem.innerText=cscount;
            }
        }, 1500);
        //Game LOGIC Ends
    })
});

//Play Again JS
play.addEventListener("click", () => {
    window.location.reload();
})

//Rules Box JS
rule_btn.addEventListener("click", () => {
    show_rules.style.opacity = "1";
})

//Rules CLose Button JS
let close = document.querySelector(".close-btn");
close.addEventListener("click", () => {
    show_rules.style.opacity = "0";
})



