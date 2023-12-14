// you may need helper functions
function random_colored_besiden(n, rune){
    return n === 0
    ? rune
    :beside_frac(1/n,random_color(rune),random_colored_besiden(n-1,rune));
}

function randomly_colored_carpet(n, m, rune) {
    return n === 0
    ? rune
    :stack_frac(
        1/n,
        random_colored_besiden(m,rune),
        randomly_colored_carpet(n-1,m,rune)); // your solution goes here
}

// Test
show(randomly_colored_carpet(10, 10, heart));
show(random_colored_besiden(2,heart));
// should produce a carpet as shown in the title picture of this quest.