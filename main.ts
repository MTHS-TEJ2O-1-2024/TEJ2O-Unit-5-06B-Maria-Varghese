/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria
 * Created on: Sep 2024
 * This program tells distance using sonar
*/

let distanceToObject: number = 0

//setup
basic.showIcon(IconNames.Diamond) 

//finding distance from sonar
input.onButtonPressed(Button.A, function(){
    basic.clearScreen()
    distanceToObject = sonar.ping (
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    basic.showNumber(distanceToObject )
    basic.showString(' cm')
    basic.showIcon(IconNames.Happy)
})
