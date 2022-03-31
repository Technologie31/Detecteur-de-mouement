let value = 0
let star = GestureRecognition.GestureInit()
if (star == 0) {
    basic.showIcon(IconNames.Happy)
} else if (star == 255) {
    basic.showIcon(IconNames.Sad)
}
basic.forever(function () {
    value = GestureRecognition.GetGesture()
    if (value == GestureRecognition.SelectGesture(GestureRecognition.Gesture_state.right)) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        basic.showArrow(ArrowNames.East)
    } else if (value == GestureRecognition.SelectGesture(GestureRecognition.Gesture_state.left)) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
        basic.showArrow(ArrowNames.West)
    } else if (value == GestureRecognition.SelectGesture(GestureRecognition.Gesture_state.up)) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.OnceInBackground)
        basic.showArrow(ArrowNames.North)
    } else if (value == GestureRecognition.SelectGesture(GestureRecognition.Gesture_state.down)) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.OnceInBackground)
        basic.showArrow(ArrowNames.South)
    } else if (value == GestureRecognition.SelectGesture(GestureRecognition.Gesture_state.forward)) {
        music.stopMelody(MelodyStopOptions.All)
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
    }
    basic.pause(100)
})
