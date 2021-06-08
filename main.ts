input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
