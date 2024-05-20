$(document).ready(function() {
    $("#rechnenFunction").click(function() {
        let x = Number($("#rechnung").val());
        let y = Number($("#service").val());
        let z = Number($("#leute").val());
        let erg = (x/z)*y;
        $("#zahl").text(`${erg.toFixed(2)} \u20AC`);
        $("#ergebnis").css("visibility", "visible");
    });
});