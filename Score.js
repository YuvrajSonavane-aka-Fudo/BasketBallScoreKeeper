//Getting the variables for home team
let score = document.getElementById("h1")
console.log(score)
let scoreCount = parseInt(score.innerText)
console.log(scoreCount)
//getting the variables for away team
let scoreAway = document.getElementById("a1")
let scoreCountAway = parseInt(scoreAway.innerText)
//functions to add points to home team
let addOnePoint = ()=>{
    scoreCount += 1
    score.textContent = scoreCount
}

let addTwoPoints = ()=>{
    scoreCount += 2
    score.textContent = scoreCount
}

let addThreePoints = ()=>{
    scoreCount += 3
    score.textContent = scoreCount
}
//functions to add points to away team
let addOnePointToAway = ()=>{
    scoreCountAway += 1
    scoreAway.textContent = scoreCountAway
}

let addTwoPointsToAway = ()=>{
    scoreCountAway += 2
    scoreAway.textContent = scoreCountAway
}

let addThreePointsToAway = ()=>{
    scoreCountAway += 3
    scoreAway.textContent = scoreCountAway
}