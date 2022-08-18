

const toggleButton = document.querySelector(".toggler");
toggleButton.addEventListener("click", change);

function change() {

    const perMonth = document.querySelectorAll(".perMonth");
    const perYear = document.querySelectorAll(".perYear");
let i;
let j;
    for (i = 0; i < perMonth.length; i++) {
        for (j = 0; j < perYear.length; j++) {
            if (perMonth[i].style.display === "none") {
                perMonth[i].style.display = "grid";
                perYear[i].style.display = "none";
                toggleButton.style.justifyContent = "flex-end";
                
            } else {
                perMonth[i].style.display = "none";
                perYear[i].style.display = "grid";
                toggleButton.style.justifyContent = "flex-start";
                
            }
        }
    }


}
