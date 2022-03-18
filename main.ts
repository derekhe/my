input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    led.setBrightness(input.runningTime())
    for (let index = 0; index <= 4; index++) {
    	
    }
    if (led.point(0, 0)) {
    	
    }
})
function 传送带复位 () {
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
}
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
})
