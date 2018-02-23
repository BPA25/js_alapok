szoveg = '3';

console.log(szoveg);

//szekvencia: a program az utasításokat, soronként hajtja végre
//egymás után

//innettől minden strict mode-ban van:
(function() {
  'use strict';
  //minden, amit ide írok az strict mode-ban fog futni
  //a strict mode szigorúbb szabályokkal futtattja
  //a javascript kódot, és több hibát fog kiírni a böngésző
  //amit enélkül nem tenne
    
  //var : ez egy újradekralálható változó lesz
    
  var szoveg2 = 'valami';
  console.log(szoveg2);
    
  //erre nem kapunk hibát, mert a var kulcsszóval dekralált változót
  //újradekralálhatjuk:
  var szoveg2 = 'valami';
    
  let szoveg3 = 'szoveg3 ezt let-el hoztuk létre';
  console.log(szoveg3);
  //a let kulcsszóval létrehozott változókat nem lehet újradeklarálni,
  //a következő sort, ha nem kommentezzük ki, hibát kapunk:
  //let szoveg3 = "szoveg3 ezt let-el hoztuk létre";
    
  //automatic semicolon insertion
  //ha kihagyjuk a pontosvesszőt, akkor a javascript  
  //megpróbálja betenni helyettünk, (ez néha sikerül, néha nem...)
  //ez egy értékadás, nem deklarálás:
  szoveg3 = 'uj erteket kap a szoveg3';
    
  //a console,log egy függvény, aminek átadjuk a szoveg3 változót
  //a console.log egy más ember által írt kód, ami ezt csinálja
  //a neki adott váltizóval, hogy kiírja a consolra
  console.log(szoveg3);
    
  //kiírhatunk egyszerre szöveget és változót is:
  let szam1 = 94;
  console.log('a szaml valtozo értéke: '+szam1);
  //a szöveg típusa string:
  console.log(typeof(szoveg3));
  //a szam1 típusát is kiírhatjuk:
  console.log('szam1 változó típusa: ' +typeof(szam1));
  
  szam1 = 34;
  
  let a = 3;
  let b = 9;
  console.log('a értéke: ' +a+ ' b értéke: ' +b);
  
  //kicseréljük két változó értékét, egy harmadik (segédváltozó)
  //segítségével
  let c = a;
  a = b;
  b = c;
  console.log('a értéke: ' +a+ ' b értéke: ' +b);
  
  //boolean változó típus
  //logikai változó, két értéke lehet, true vagy false
  let kapcsolo = false;
  
  //elágazás, ha a feltételben lévő rész igahz, akkor a {}-ban lévő rész
  //lefut
  if(kapcsolo === true)
  {
    console.log('A kapcsoló be van kapcsolva');
  }
  else //különben
  {
    console.log('A kapcsoló ki van kapcsolva');
  }
  let nev = 'Geza';
  //három darab egyenlőségjellel hasonlítunk össze értékeket!!
  //a három egyenlőségjel a típust is hasonlítja
  //a kettő darab egyenlőségjel nem hasonlít típust: pl
  //3 == '3' > true
  //3 === '3' > false
  if(nev === 'Geza')
  {
    console.log('geza itt van');
  }
  
  if(a > b)
  {
    console.log('a nagyobb, mint b');
  }
  else
  {
    console.log('a nem nagyobb, mint b');
  }
  
  //ha nem egyenlőséget vizsgálunk, akkor azt így kell:
  //itt is, ha 2 db egyenlőségjel van, akkor vizsgáljuk a típust is
  //ha csak egy lenne, akkor nem vizsgáljuk a típust...
  //if(a !== ) ...
  
  //hoisting
  console.log('a palack értéke: ' +palack); //ebben a sorban már létezik
  //a palack változó csak még nem kapott értéket, ezért "undefined"
  //csak a var kulcsszóval deklarált változókra érvényes a hoisting
  var palack = 'szilva';
  
  let szam = 0;
  //ez olyan, mint ha azt írnám, hogy szam = szam + 1
  szam++;
  szam+=4;
  console.log('a szám értéke: ' +szam);
  console.log('új sort a \n karakterrel lehet csinálni');
  
  
  //ciklusok
  //a {}-ban lévő rész addig fut, amíg a while-ban lévő feltétel
  //igaz
  while(szam >= 0)
  {
    szam--;
    console.log('szam-ból levontunk egyet: ' +szam);
  }
  
  //végtelen ciklus:
  //while(true){}
  
  //ezt a  változót tömbnek hívjuk
  //több elemet tartalmazhat a tömb
  let szamok = [3,4,5,6,7,8,9];
  //a javascriptben a tömb is object
  console.log('a számok típusa: ' +typeof(szamok));
  //a tömb 7 elemű, de nincs 7. indexű eleme, mert nullától indexeljük
  //a tömböket
  console.log('a tömb nulladik eleme a(z): ' +szamok[7]);
  
  
  //for ciklusban meg kell adni, hogy mettől meddig menjünk
  //és azt is hányasával lépkedjünk, az i++ azt jelenti, hogy
  //egyesével megyünk
  for(let i = 0; i < szamok.length; i++)
  {
    //a szamok i-edik elemét kiírjuk
    console.log('a szam: ' +szamok[i]);
  }
  
  
  //ellenőrizzük, hogy van e 9-es a tömbben:
  for(let i = 0; i < szamok.length; i++)
  {
    if(szamok[i] === 9)
    {
      console.log('van a számok között 9-es');
    }
  }
  
  
  //-------------------------------------------------------------------------------
  //------------------------------  FÜGGVÉNYEK  -----------------------------------
  //-------------------------------------------------------------------------------
  
  //1. Function Statement
  
  //erre érvényes a hoisting
  //ez egy olyan kódrész, amit később újra fel tudunk használni
  //az osszeadas függvénynek két bemeneti paramétere van
  function osszeadas(szam1, szam2)
  {
    //a szam1 és a szam2 number típusú kell, hogy legyen (mindkettő feltétel
    //igaz kell, hogy legyen, ezért rakunk közé && (AND) jelet)
    if((typeof(szam1) === 'number') && (typeof(szam2) === 'number'))
    {
      let eredmeny = szam1 + szam2;
      console.log('az eredmény: ' +eredmeny);
    }
    else
    {
      console.log('error, nem számot kaptam!');
    }
  }
  
  //itt használjuk fel az összeadás függvényünket
  osszeadas(6, 9);
  osszeadas('34', 9);
  
  
  //2. Function Expression
  
  //erre nem érvényes a hoisting
  let convertToNumber = function(szam){
    let konvertaltSzam = parseInt(szam);
    if(isNaN(konvertaltSzam))
    {
      konvertaltSzam = 0;
      console.log('NaN-t kaptunk ezért nullázzuk');
    }
    else
    {
      console.log('konvertálás sikeres volt');
    }
  };
  
  convertToNumber('34');
  convertToNumber('sdfsdf');
  
  //innen újból function statement
  
  //camelCasing = aMásodikSzótólMindenBetűtNagyBetűvelÍrok
  //javascript-ben (JS-ben) gyakran használjuk
  function pontosIdo()
  {
    //lokális változó, csak ebben a függvényben van értelme
    //variable scope: local
    let ido = 5;
    console.log('a pontos idő: ' +ido);
    //függvényre is érvényes a scope, ezt csak a pontosIdo-n
    //belül tudom használni
    //closure: ha kettő függvény van egymásba ágyazva, akkor a belső függvény
    //hozzáfér a külső függvény változóihoz
    function pontosIdo2()
    {
      console.log('az idő értéke: ' +ido);
    }
    pontosIdo2();
  }
  
  //itt használjuk fel a pontosIdo függvényünket
  pontosIdo();
  
  //pontosIdo2();
  //az idő változónak itt nincs értelme, mert a pontosIdo függvényen belül
  //deklaráltuk,
  //console.log('a pontos idő: ' +ido); 
  
  
  //IIFE: immidiately invoked function expression:
  
  //ez egy névtelen függvény
  (function(){
    console.log('ez egyből meghívódik');
  })();
  
  
  
}()); //itt van vége a strict mode-nak, ez után már nem fog strict
//mode-ban futni a kod

//inplicit global változó lesz a szöveg
//global: a szöveg változó mindenhol elérhető lesz a kódban
//implicit globalt változót lehetőleg ne használjunk!