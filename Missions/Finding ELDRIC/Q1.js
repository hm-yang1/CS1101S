// Your program here.
// Your program here.
ev3_speak("hello chan how"); // DO NOT DELETE
//==============================
//Magic numbers
const magic_number = 18; // 18 position units -> 1cm motor movement (speed 300)
const speed = 300;
const one_second = 1000;
const distance_between_wheels = 15;
//distance between wheels is x cm
//circumference of the circle is pi * (2x) cm
//x degrees -> math_PI * (x / 180) cm for wheel to cover
//==============================
//Connection and diagnosis
const motorB = ev3_motorB();
const motorC = ev3_motorC();
const colorSensor = ev3_colorSensor();
const killSwitch = ev3_touchSensor3();

display(ev3_connected(motorB) ? "B connected" : "B not connected");
display(ev3_connected(motorC) ? "C connected" : "C not connected");
display(ev3_connected(colorSensor) 
        ? "colour sensor connected"
        : "colour sensor not connected");
display(ev3_connected(killSwitch)
        ? "kill switch connected"
        : "kill switch not connected");
//======================================
//Q1
function perSecondLightIntensity(seconds) {
    for (let i = 0; i < seconds; i = i + 1) {
        display(ev3_reflectedLightIntensity(colorSensor));
        if (ev3_touchSensorPressed(killSwitch)){
            display("kill switch activated");
            break;
        }
        wait(1);
    }
}
