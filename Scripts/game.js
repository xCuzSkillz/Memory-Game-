const arena = document.getElementById("game__area")
const levelTitle = document.getElementById("level__title")

levels = [
    {
        level: 1,
        count: 4,
    },
    {
        level: 2,
        count: 6,
    },
    {
        level: 3,
        count: 8,
    },
    {
        level: 4,
        count: 10,
    },
    {
        level: 5,
        count: 12,
    },
    {
        level: 6,
        count: 14,
    },

]

let currentLevel = 1;

levelTitle.textContent = `Level ${currentLevel}`

for(let i = 0; i < 35; i++) {
    let cell = document.createElement("button")
    cell.className = "cell"

    arena.append(cell)
}

const cells = document.querySelectorAll(".cell")

let count = 4;
let activated = 0;

levels.forEach((e) => {
   if(currentLevel === e.level) {
    while (activated < e.count) {
    let any = Math.floor(Math.random() * cells.length);
    if (!cells[any].classList.contains("active")) {
        cells[any].classList.add("active");
        cells[any].setAttribute("correct", "true");
        activated++;

        cells.forEach((e) => {
           e.disabled = true;
           e.addEventListener("click", () => {
            if(!e.hasAttribute("correct")) {
               e.classList.add("wrong")
                cells.forEach((e) => {
                   e.disabled = true;
                }) 
            }
            e.classList.add("correct")
           })

             setTimeout(() => {
                cells[any].classList.remove("active");
                e.disabled = false
            }, 3000)
        })
   }
  }
}
})