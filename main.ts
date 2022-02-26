function Load () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    _️()
}
input.onButtonPressed(Button.A, function () {
    if (Compass <= 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (Compass <= 67.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (Compass <= 112.5) {
        basic.showArrow(ArrowNames.East)
    } else if (Compass <= 157.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (Compass <= 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (Compass <= 247.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (Compass <= 292.5) {
        basic.showArrow(ArrowNames.West)
    } else if (Compass <= 337.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
function startup () {
    basic.showString("Microsoft MakeCode for micro:bit and GamePlay Technologies Inc. presents")
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.North)
    basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # # . . #
        . # # # .
        `)
    basic.showString("Micro:Compass for micro:bit")
    basic.clearScreen()
    basic.pause(2000)
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.compassHeading())
})
function _️ () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
}
let Compass = 0
startup()
Load()
loops.everyInterval(100, function () {
    Compass = input.compassHeading()
})
