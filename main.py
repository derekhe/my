def on_button_pressed_a():
    kitronik_motor_driver.motor_off(kitronik_motor_driver.Motors.MOTOR2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_leds("""
        # . # . .
                . . . . .
                . . . # .
                . . . . .
                . . . . .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)
