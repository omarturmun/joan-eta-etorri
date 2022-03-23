input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    basic.pause(1000)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
    basic.pause(1000)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    basic.pause(1000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 70)
    basic.pause(500)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 70)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 70)
    basic.pause(500)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 70)
    basic.pause(500)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
	
})
