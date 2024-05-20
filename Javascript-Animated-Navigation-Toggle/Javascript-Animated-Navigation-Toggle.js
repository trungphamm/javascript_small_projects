function meinFunction(x) {
    x.classList.toggle("change");

    //Definierung

    let text = document.getElementById("text");
    let titel = document.getElementById("titel");
    let neueMenu = document.getElementsByClassName("neueMenu")[0];
    let itemSide1 = document.getElementsByClassName("itemSide")[0];
    let itemSide2 = document.getElementsByClassName("itemSide")[1];
    let grosserTitel = document.getElementById("grosserTitel");
    let neueMenuList = document.getElementsByClassName("neueMenuList")[0];

    //Class hinzufuegen
    
    itemSide1.classList.toggle("itemChange");
    itemSide2.classList.toggle("itemChange");
    text.classList.toggle("changeText");
    titel.classList.toggle("changeText");
    grosserTitel.classList.toggle("grosserTitelChange");
    neueMenuList.classList.toggle("neueMenuListchange");
    /*setTimeout(function() {
        text.classList.toggle("displayNone");
        titel.classList.toggle("displayNone");
    },400);*/

}