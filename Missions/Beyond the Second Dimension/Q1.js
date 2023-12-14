function mosaic(r1, r2, r3, r4) {
    return stack(beside(r4,r1),beside(r3,r2));// your answer here
}
function steps(r1, r2, r3, r4){
    return overlay(mosaic(blank,blank,blank,r4),
            overlay(mosaic(blank,blank,r3,blank),
            overlay(mosaic(blank,r2,blank,blank),
            mosaic(r1,blank,blank,blank)))); // your answer here
}

// Tests
show(steps(rcross, triangle, corner, nova));
hollusion(steps(rcross, triangle, corner, nova));
//Is there a way to make steps less ugly?