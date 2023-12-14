// Your program here.
ev3_speak("hello chan how");
//==============================
const magic_number = 18;
const speed = 300;
const one_second = 1000;
const distance_between_wheels = 15;
//distance between wheels is x cm
//circumference of the circle is pi * (2x) cm
//x degrees -> math_PI * (x / 180) cm for wheel to cover
//==============================

const motorB = ev3_motorB();
const motorC = ev3_motorC();

display(ev3_connected(motorB) ? "B connected" : "B not connected");
display(ev3_connected(motorC) ? "C connected" : "C not connected");

//===============================

const cm = d => d * magic_number;
const second = t => one_second * t; // second(n) runs n seconds
const wait = t => ev3_pause(second(t)); // wait instruction for n seconds

//===============================

function go_straight(motor1, motor2, pos) {
     ev3_speak("straight");
     ev3_runToRelativePosition(motor1, pos, speed);
     ev3_runToRelativePosition(motor2, pos, speed);
     wait(0.5);
 }
// go_straight(motorB, motorC,cm(10));
//================================

function magic_turn(motor) {
    ev3_speak("turning");
    const angle_to_dist = angle => cm(math_PI * distance_between_wheels * angle / 180);
    wait(1);
    ev3_runToRelativePosition(motor, angle_to_dist(90), speed);
    wait(3);
}

const left_90 = () => magic_turn(motorC); // Turn left 90 degree
left_90();
const right_90 = () => magic_turn(motorB); // Turn right 90 degree

// //===============

function fancy_movement(){
    go_straight(motorB, motorC,cm(10));
    wait(1);
    left_90();
    wait(1);
    go_straight(motorB, motorC,cm(5));
    wait(1);
    right_90();
    wait(1);
    go_straight(motorB, motorC,cm(15));
    wait(3);
}

fancy_movement();