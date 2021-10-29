ball: game.LedSprite = None
paddle1 = game.create_sprite(1, 4)
paddle2 = game.create_sprite(2, 4)

def on_forever():
    global ball
    if True:
        ball = game.create_sprite(paddle1.get(LedSpriteProperty.X), 0)
        if True:
            ball.delete()
            paddle1.delete()
            paddle2.delete()
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . # . .
                                . # # # .
                                . . # . .
            """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                                # . . # .
                                . . # . .
                                . # # # #
                                # . # # .
            """)
            basic.pause(100)
            basic.show_leds("""
                . # # . #
                                # . . # .
                                # . # . .
                                . # # # #
                                # . # # .
            """)
            basic.pause(100)
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            basic.pause(500)
            basic.show_string("BREAKOUT")
        else:
            ball.change(LedSpriteProperty.Y, -1)
    else:
        if input.button_is_pressed(Button.A):
            paddle1.change(LedSpriteProperty.X, -1)
            paddle2.change(LedSpriteProperty.X, -1)
            basic.pause(100)
        if input.button_is_pressed(Button.B):
            paddle1.change(LedSpriteProperty.X, 1)
            paddle2.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        if paddle1.get(LedSpriteProperty.X) == 0:
            paddle1.set(LedSpriteProperty.X, 0)
            paddle2.set(LedSpriteProperty.X, 1)
            basic.pause(10)
        if paddle2.get(LedSpriteProperty.X) == 4:
            paddle1.set(LedSpriteProperty.X, 3)
            paddle2.set(LedSpriteProperty.X, 4)
            basic.pause(10)
basic.forever(on_forever)
