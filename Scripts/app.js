const startNewGame = document.getElementById("start")
const previousGame = document.getElementById("previous")

startNewGame.addEventListener("click", () => {
    localStorage.setItem("level", 1)
    window.location.href = "game.html"
})

previousGame.addEventListener("click", () => {
    window.location.href = "game.html"
})