const date = new Date()

let dayActual = date.getDate()
let hoursActual = date.getHours()
let minutesActual = date.getMinutes()
let secondsActual = date.getSeconds()

const input = document.getElementsByClassName("main__data")
console.log(input[0].valueAsDate)
let day = input[0].valueAsDate.getDate()
let hours = input[0].valueAsDate.getHours()
let minutes = input[0].valueAsDate.getMinutes()
let seconds = input[0].valueAsDate.getSeconds()
console.log(day, hours, minutes, seconds)
const btn = document.getElementsByClassName("main__btn")

btn[0].addEventListener("click", ()=>{
	console.log("input")	
})
