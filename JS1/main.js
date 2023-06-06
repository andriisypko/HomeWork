//task1
let heroName = document.querySelector(".task-1__input")
let hello = document.querySelector(".task-1__btn")
let out1 = document.querySelector(".task-1__span")

hello.onclick = () => {
    out1.innerHTML = heroName.value
}

//task2
let heroBorn = document.querySelector(".task-2__input")
let heroAgeResult = document.querySelector(".task-2__btn")
let out2 = document.querySelector(".task-2__span")
const currentYear = 2023


heroAgeResult.onclick = () => {
    out2.innerHTML = currentYear - heroBorn.value
}

//task3
let sideSize = document.querySelector(".task-3__input")
let sideSizeResult = document.querySelector(".task-3__btn")
let out3 = document.querySelector(".task-3__span")

sideSizeResult.onclick = () => {
    out3.innerHTML = 4 * sideSize.value
}

//task4
let circleRadius = document.querySelector(".task-4__input")
let circleAreaResult = document.querySelector(".task-4__btn")
let out4 = document.querySelector(".task-4__span")

circleAreaResult.onclick = () => {
    out4.innerHTML = 3.14 * circleRadius.value ** 2
}

//task5
let distance = document.querySelector(".task-5__input")
let time = document.querySelector(".task-5__input2")
let speedResult = document.querySelector(".task-5__btn")
let out5 = document.querySelector(".task-5__span")

speedResult.onclick = () => {
    out5.innerHTML = distance.value / time.value
}
//task6
let eur = document.querySelector(".task-6__input")
let uahResult = document.querySelector(".task-6__btn")
let out6 = document.querySelector(".task-6__span")
const exchRate = 40

uahResult.onclick = () => {
    out6.innerHTML = exchRate * eur.value
}