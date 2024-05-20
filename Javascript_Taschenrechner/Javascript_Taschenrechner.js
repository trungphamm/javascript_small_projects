function rechnenFunction() {
    document.getElementById("ergebnis").style.visibility = "visible";
    let x = Number(document.getElementById("rechnung").value);
    let y = Number(document.getElementById("service").value);
    let z = Number(document.getElementById("leute").value);
    let erg = 0;
    erg = (x/z)*y;
    document.getElementById("zahl").innerHTML = erg.toFixed(2) + " &euro;";
}