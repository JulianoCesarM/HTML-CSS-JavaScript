function Calcular(){
    var np1 = Number.parseFloat(window.document.getElementById("np1").value);
    var np2 = Number.parseFloat(window.document.getElementById("np2").value);
    var part1 = Number.parseFloat(window.document.getElementById("part1").value);
    var part2 = Number.parseFloat(window.document.getElementById("part2").value);
    var pluri = Number.parseFloat(window.document.getElementById("pluri").value);

    var final = (np1+part1)*0.4 + ((np2*0.8+pluri*0.2)+part2)*0.6;

    res.innerHTML = `Média das notas: <strong>${final}</strong>`;
    
}