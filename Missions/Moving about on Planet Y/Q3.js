// Your program here.
ev3_speak("hello chan how"); // DO NOT DELETE
//==============================
const magic_number = 18; // 18 position units -> 1cm motor movement (speed 300)
const scale_factor = 0.1; // 1 position unit for ultrasonic sensor -> 0.1cm
const speed = 300;
const one_second = 1000;
const distance_between_wheels = 15;
//distance between wheels is x cm
//circumference of the circle is pi * (2x) cm
//x degrees -> math_PI * (x / 180) cm for wheel to cover
//==============================

const motorB = ev3_motorB();
const motorC = ev3_motorC();
const ultrasonicSensor = ev3_ultrasonicSensor(1);

display(ev3_connected(motorB) ? "B connected" : "B not connected");
display(ev3_connected(motorC) ? "C connected" : "C not connected");
display(ev3_connected(ultrasonicSensor) 
        ? "ultrasonic sensor connected"
        : "ultrasonic sensor not connected");

//===============================

const cm = d => d * magic_number;
const second = t => one_second * t; // second(n) runs n seconds
const wait = t => ev3_pause(second(t)); // wait instruction for n seconds
const angle_to_dist = angle => cm(math_PI * distance_between_wheels * angle / 180);
const sensor_distance = () => ev3_ultrasonicSensorDistance(ultrasonicSensor) * scale_factor;
//===============================

function go_straight(motor1, motor2, pos) {
     ev3_speak("straight");
     ev3_runToRelativePosition(motor1, pos, speed);
     ev3_runToRelativePosition(motor2, pos, speed);
     wait(0.5);
     display(sensor_distance());
}

//================================

function magic_turn(motor) {
    ev3_speak("turning");
    const angle_to_dist = angle => cm(math_PI * distance_between_wheels * angle / 180);
    wait(1);
    ev3_runToRelativePosition(motor, angle_to_dist(90), speed);
    wait(3);
}

const left_90 = () => magic_turn(motorC); // Turn left 90 degree
const right_90 = () => magic_turn(motorB); // Turn right 90 degree
//==============
function go_forward_until(safe_distance, action) {  
    const initial_distance = sensor_distance();
    if (initial_distance > safe_distance){
        go_straight(motorB, motorC, cm(initial_distance - safe_distance));
    }
    wait(1);
    action();
    wait(2);
}
// go_forward_until(10, go_straight(motorB, motorC, cm(-30)));
//==============
function go_around() {
    if (math_random() > 0.5) {
        left_90();
        wait(1);
        go_straight(motorB, motorC, cm(30));
        wait(2);
        right_90();
    } else {
        right_90();
        wait(1);
        go_straight(motorB, motorC, cm(30));
        wait(2);
        left_90();
    } 
    go_straight(motorB, motorC, cm(50));
} 
go_forward_until(15, go_around);