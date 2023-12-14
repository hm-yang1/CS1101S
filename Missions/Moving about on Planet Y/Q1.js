// Your program here.
const magic_number = 18; // 18 position units -> 1cm motor movement (speed 300)
const scale_factor = 0.1; // 1 position unit for ultrasonic sensor -> 0.1cm
const one_second = 1000;
//==============================
const ultrasonicSensor = ev3_ultrasonicSensor(1);
display(ev3_connected(ultrasonicSensor) 
        ? "ultrasonic sensor connected"
        : "ultrasonic sensor not connected");
//===============================
const second = t => one_second * t; // second(n) runs n seconds
const wait = t => ev3_pause(second(t)); // wait instruction for n seconds
const sensor_distance = () => ev3_ultrasonicSensorDistance(ultrasonicSensor) * scale_factor;
//===============================
function get_wall_distance_every_second(time_s) {
    while (time_s > 0) {
        display(sensor_distance());
        wait(1);
        time_s = time_s - 1;
    }
}
get_wall_distance_every_second(10);
