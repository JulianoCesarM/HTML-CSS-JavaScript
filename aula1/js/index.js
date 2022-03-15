function Calcular(){

    var np1 = document.getElementById("np1");
    var np2 = document.getElementById("np2");
    var part1 = document.getElementById("part1");
    var part2 = document.getElementById("part2");
    var pluri = document.getElementById("pluri");

    var final = (np1+part1)*0.4 + ((np2*0.8+pluri*0.2)+part2)*0.6;
    
    return document.getElementById("res").innerHTML = "Média das notas: " + final;
}