input.onSound(DetectedSound.Loud, function () {
    if (input.soundLevel() < 200) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
