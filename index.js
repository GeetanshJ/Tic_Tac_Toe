document.addEventListener("DOMContentLoaded", () => {
    let changeTheme = document.querySelector(".change-theme");
    let body = document.querySelector("body");

    let newGame = document.querySelector(".newGame");
    newGame.addEventListener("click", () => {
        location.reload();
    })

    let restart = document.querySelector(".restart");
    restart.addEventListener("click", () => {
        location.reload();
    })
    let bg = "light";

    changeTheme.addEventListener("click", () => {
        if (bg === "light") {
            body.classList.add("dark");
            body.classList.remove("light");
            bg = "dark";
        } else {
            body.classList.add("light");
            body.classList.remove("dark");
            bg = "light";
        }
    });

    let turnO = true;

    let boxes = document.querySelectorAll(".boxes");
    const winPattern = [
        [0, 1, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    var count = 0;
    boxes.forEach((box) => box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X";
            turnO = false;
            box.disabled = true;
            count++;
        } else {
            box.innerText = "O";
            turnO = true;
            box.disabled = true;
            count++;
        }

        checkWinner();
    }));

    let winner = document.querySelector(".winner");
    const disableAllBoxes = () => {
        boxes.forEach((box) => box.disabled = true);
    };

    const checkWinner = () => {
        for (let patterns of winPattern) {
            let pat1 = boxes[patterns[0]].innerText;
            let pat2 = boxes[patterns[1]].innerText;
            let pat3 = boxes[patterns[2]].innerText;

            if (pat1 !== "" && pat2 !== "" && pat3 !== "") {
                if (pat1 === pat2 && pat2 === pat3) {
                    if (pat3 === 'X') {
                        winner.innerText = "Winner is X";
                    } else if (pat3 === 'O') {
                        winner.innerText = "Winner is O";
                    }
                    disableAllBoxes();
                    return;
                }
            }
        }
        if (count === 9) {
            winner.innerText = "It's a Draw";
            disableAllBoxes();
        }
    }
});
