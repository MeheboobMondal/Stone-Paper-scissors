let userScore = document.getElementById("user")
let compScore = document.getElementById("comp")
let showMsg = document.getElementById("turn")
let userCount = 0
let CompCount = 0

let choices = document.querySelectorAll(".choice")
console.log(choices)
choices.forEach((cho) => {
    cho.addEventListener("click",() => {
        
        let userselect = cho.getAttribute("id")
        let computer = randomComp()
        if(userselect === computer){
            showMsg.innerHTML = "Game is Draw"
        }else{
            let userWin = true;
            if(userselect === "rock"){
                userWin = computer === "paper" ? false: true
            }else if(userselect === "paper"){
                   userWin =  computer === "scissors" ? false : true
                }
            else if(userselect === "scissors"){
                   userWin =  computer === "rock" ? false : true
                }
            
            showWinner(userWin)
        }
    })
})
const randomComp = () => {
    let arr = ["rock", "paper", "scissors"]
    let generate = ((Math.floor(Math.random(arr)*3)))
    console.log(arr[generate])
    return (arr[generate])

}

const showWinner= (userWin) => {
    
    if(userWin){
        showMsg.innerHTML = "You Win!"
        userCount += 1
        userScore.innerHTML = userCount

    }
    else{
        showMsg.innerHTML = "You Lose!"
        CompCount += 1
        compScore.innerHTML = CompCount
    }
    finnalWinner()
}

const finnalWinner = () => {
    if(userCount == 10){
        showMsg.innerHTML = "You Won The Game"
        userCount = 0
        userScore.innerHTML = userCount
        CompCount = 0
        compScore.innerHTML = CompCount

    }
    else if(CompCount == 10){
        showMsg.innerHTML = "Computer Won The Game" 
        CompCount = 0
        compScore.innerHTML = CompCount
        userCount = 0
        userScore.innerHTML = userCount 
    }
}

