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

//===============================
//Movement modules
const cm = d => d * magic_number;
const second = t => one_second * t; // second(n) runs n seconds
const wait = t => ev3_pause(second(t)); // wait instruction for n seconds
const angle_to_dist = angle => cm(math_PI * distance_between_wheels * angle / 180);


function go_straight(motor1, motor2, pos) {
     ev3_speak("straight");
     ev3_runToRelativePosition(motor1, pos, speed);
     ev3_runToRelativePosition(motor2, pos, speed);
     wait(0.5);
}

function pivot_turn_left(angle) {
        ev3_speak("turning");
        wait(1);
        ev3_runToRelativePosition(motorB, (-1)*angle_to_dist(angle), speed);
        ev3_runToRelativePosition(motorC, angle_to_dist(angle), speed);
        wait(3); 
}

function pivot_turn_right(angle) {
        ev3_speak("turning");
        wait(1);
        ev3_runToRelativePosition(motorC, (-1)*angle_to_dist(angle), speed);
        ev3_runToRelativePosition(motorB, angle_to_dist(41), speed);
        wait(3);
}

const left_90 = (angle) => pivot_turn_left(41); // Turn left 90 degree
const right_90 = (angle) => pivot_turn_right(41); // Turn right 90 degree

//================================
//Light sensing module

function perSecondLightIntensity (seconds) {
    for (let i = 0; i < seconds; i = i + 1) {
        display(ev3_reflectedLightIntensity(colorSensor));
        if (ev3_touchSensorPressed(killSwitch)){
            display("kill switch activated");
            break;
        }
        wait(1);
    }
}
//===========================================
// Q3/Q2
function robot_go_brr(motor1, motor2) {
    let magic_time = 0; // so that robot won't go forever if kill switch fails
    while (true) {
        display(magic_time);
        magic_time = magic_time + 1;
        while(true) {
            magic_time = magic_time + 1;
            ev3_motorSetSpeed(motor1, 100);
            ev3_motorSetSpeed(motor2, -50);
            ev3_motorStart(motor1);
            ev3_motorStart(motor2);
            if (ev3_reflectedLightIntensity(colorSensor) > 25) {
                wait(0.25);
                ev3_motorStop(motor1);
                ev3_motorStop(motor2);
                break;
            }
        }
        while(true) {
            magic_time = magic_time + 1;
            ev3_motorSetSpeed(motor2, 100);
            ev3_motorSetSpeed(motor1, -50);
            ev3_motorStart(motor1);
            ev3_motorStart(motor2);
            if (ev3_reflectedLightIntensity(colorSensor) < 25) {
                wait(0.25);
                ev3_motorStop(motor2);
                ev3_motorStop(motor1);
                break;
            }
        }
        if (ev3_touchSensorPressed(killSwitch) || magic_time > 3000) {
            display("kill switch activated");
            break;
        }
    }
}

robot_go_brr(motorB, motorC);