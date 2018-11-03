let Rock = 0
let Scissors = 0
let Paper = 0
let myChoice = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    myChoice = Paper
    radio.sendNumber(myChoice)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
    myChoice = Scissors
    radio.sendNumber(myChoice)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == Paper && myChoice == Scissors) {
        basic.showString("i win")
    } else if (receivedNumber == Scissors && myChoice == Paper) {
        basic.showString("i lose")
    } else if (receivedNumber == Scissors && myChoice == Scissors) {
        basic.showString("draw")
    } else if (receivedNumber == Rock == (myChoice == Rock)) {
        basic.showString("draw")
    } else if (receivedNumber == Rock && myChoice == Scissors) {
        basic.showString("i lose")
    } else if (receivedNumber == Rock && myChoice == Paper) {
        basic.showString("i win")
    } else if (receivedNumber == Paper && myChoice == Rock) {
        basic.showString("i lose")
    } else if (receivedNumber == Paper && myChoice == Paper) {
        basic.showString("draw")
    } else if (receivedNumber == Scissors && myChoice == Rock) {
        basic.showString("i win")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
    myChoice = Rock
    radio.sendNumber(myChoice)
})
radio.setGroup(5)
Paper = 1
Scissors = 2
Rock = 3
