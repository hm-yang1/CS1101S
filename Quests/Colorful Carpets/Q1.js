// your solution goes here
function besiden(n, rune) {
    return n === 0
    ? rune
    :beside_frac(1/n,rune,besiden(n-1,rune)); 
}

// Test
show(besiden(7, heart));
