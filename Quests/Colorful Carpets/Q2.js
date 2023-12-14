// paste your besiden function from the
// previous question here
function besiden(n, rune){
    return n === 0
    ? rune
    :beside_frac(1/n,rune,besiden(n-1,rune));
}
// your solution goes here
function carpet(n, m, rune){
    return stackn(n,besiden(m,rune));
}

// Test
show(carpet(7, 5, heart));
show(carpet(10, 10, random_color(heart)));
