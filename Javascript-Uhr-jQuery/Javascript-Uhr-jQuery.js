"use strict";
$(document).ready(function () {
    let x = setInterval(function() {
        let d = new Date(); 
        let h = d.getHours(), m = d.getMinutes(), s = d.getSeconds(), a = "";
        if (h == 0 && m == 0 && s == 0) {
            a = "Mitternacht";
        } else if (h == 12 && m == 0 && s == 0) {
            a = "Mittag";
        } else if (h == 12) {
            a = "PM";
        } else if (h == 0) {
            h = 12;
            a = "AM";
        } else if (h >= 1 && h <= 11) {
            a = "AM";
        } else {
            h -= 12;
            a = "PM";
        }
        if (m < 10) {m = "0" + m}
        if (h < 10) {h = "0" + h}
        if (s < 10) {s = "0" + s}
        $("#Uhr").text(`${h}:${m}:${s} ${a}`);
    }, 1000);
    $("#btn").click(function () {
        if ($(this).text() === "Lass mal Party!") {
            $(this).text("Party ist vorbei!");
            $("#katze_img").attr("src", "katze_tanzen.jpg");
        } else {
            $(this).text("Lass mal Party!");
            $("#katze_img").attr("src", "Katze01.jpg");
        }
    });    
});

