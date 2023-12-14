function cone(n, rune){
    function cone_iter(counter,n,rune,original){
        return counter === n+1
        ? rune
        : cone_iter(counter+1, n, overlay(scale(1/counter,original),rune),original);
    } 
    return cone_iter(1,n,rune,rune); // your answer here
}
