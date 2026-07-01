const arena = document.getElementById("game__area")
const levelTitle = document.getElementById("level__title")
const overlay = document.getElementById("overlay")

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

if(!localStorage.getItem("level")) {
 localStorage.setItem("level", 1)
}

let currentLevel = Number(localStorage.getItem("level"));

levelTitle.textContent = `Level ${currentLevel}`

for(let i = 0; i < 35; i++) {
    let cell = document.createElement("button")
    cell.className = "cell"

    arena.append(cell)
}

const cells = document.querySelectorAll(".cell")

let activated = 0;

let pickCounter = [];

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

            setTimeout(() => {
                cells[any].classList.remove("active");
                e.disabled = false
            }, 3000)
        })
   }
  }
}
})

cells.forEach((e) => {
   e.addEventListener("click", () => {
    if(!e.hasAttribute("correct")) {
       e.classList.add("wrong")
        cells.forEach((e) => {
           e.disabled = true;
        }) 
    } else if (e.hasAttribute("correct")){
        e.classList.add("correct")
        e.disabled = true;
        pickCounter.push(e)
        if(pickCounter.length === activated) {
            overlay.style.display = "block";
        }
       localStorage.setItem("level", currentLevel + 1)
    }
   })
})