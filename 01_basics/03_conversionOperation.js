let score = "33"
//console.log(typeof score)
//console.log(typeof (score))
let newScore = Number(score)
//console.log(typeof newScore)

// when converted to number
// "33" => 33
// "33abc" => NaN
// true => 1 and false => 0 
let isLogged = 1
let newLogged = Boolean(isLogged)
console.log(typeof isLogged)
console.log(typeof newLogged)

// when converted to boolean
// 1 => true & 0 => false
//"" => false
//"hello" => true