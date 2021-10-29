let ball: game.LedSprite = null
let paddle1 = game.createSprite(1, 4)
let paddle2 = game.createSprite(2, 4)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        ball = game.createSprite(paddle1.get(LedSpriteProperty.X), 0)
        for (let index = 0; index <= 5; index++) {
            if (ball.get(LedSpriteProperty.Y) == 4) {
                ball.delete()
                paddle1.delete()
                paddle2.delete()
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    `)
                basic.pause(50)
                basic.showLeds(`
                    . . . . .
                    # . . # .
                    . . # . .
                    . # # # #
                    # . # # .
                    `)
                basic.pause(50)
                basic.showLeds(`
                    . # # . #
                    # . . # .
                    # . # . .
                    . # # # #
                    # . # # .
                    `)
                basic.pause(50)
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.pause(500)
                basic.showString("BREAKOUT")
            } else {
                ball.change(LedSpriteProperty.Y, 1)
                basic.pause(50)
            }
        }
    } else {
        if (input.buttonIsPressed(Button.A)) {
            paddle1.change(LedSpriteProperty.X, -1)
            paddle2.change(LedSpriteProperty.X, -1)
            basic.pause(50)
        }
        if (input.buttonIsPressed(Button.B)) {
            paddle1.change(LedSpriteProperty.X, 1)
            paddle2.change(LedSpriteProperty.X, 1)
            basic.pause(50)
        }
    }
    if (paddle1.get(LedSpriteProperty.X) == 0) {
        paddle1.set(LedSpriteProperty.X, 0)
        paddle2.set(LedSpriteProperty.X, 1)
        basic.pause(10)
    }
    if (paddle2.get(LedSpriteProperty.X) == 4) {
        paddle1.set(LedSpriteProperty.X, 3)
        paddle2.set(LedSpriteProperty.X, 4)
        basic.pause(10)
    }
})
