console.log("hello");

(function() {
    'use strict'
//    minden, amit ide írok az strict mode-ban fog futni
//    a strict mode szigorúbb szabályokkal futtattja
//    a javascript kódot, és több hibát fog kiírni a böngésző
//    amit enélkül nem tenne
    
//    var : ez egy újradekralálható változó lesz
    
    var szoveg2 = "valami";
    console.log(szoveg2);
    
//    erre nem kapunk hibát, mert a var kulcsszóval dekralált változót
//    újradekralálhatjuk:
    var szoveg2 = "valami";
    
    let szoveg3 = "szoveg3 ezt let-el hoztuk létre";
    console.log(szoveg3);
//    a let kulcsszóval létrehozott változókat nem lehet újradeklarálni,
//    a következő sort, ha nem kommentezzük ki, hibát kapunk:
//    let szoveg3 = "szoveg3 ezt let-el hoztuk létre";
    
//    ez egy értékadás, nem deklarálás:
    szoveg3 = "uj erteket kap a szoveg3";
    
//    a console,log egy függvény, aminek átadjuk a szoveg3 változót
//    a console.log egy más ember által írt kód, ami ezt csinálja
//    a neki adott váltizóval, hogy kiírja a consolra
    console.log(szoveg3);
    
//    kiírhatunk egyszerre szöveget és változót is:
    let szaml = 94;
    console.log("a szaml valtozo értéke: "+szaml);
    
}()); //itt van vége a strict mode-nak, ez után már nem fog strict
      //mode-ban futni a kod

//inplicit global változó lesz a szöveg
//global: a szöveg változó mindenhol elérhető lesz a kódban
//implicit globalt változót lehetőleg ne használjunk!
szoveg = "3";

console.log(szoveg);