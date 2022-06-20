let body = document.querySelector("body");
body.style.width="80%";
body.style.margin="auto";
body.style.boxShadow="10px 10px 10px 10px #888888";

//Debut de la Partie header(Nav)
let cHeader = document.createElement("header");
cHeader.style.backgroundColor="#000";
cHeader.style.color="#fff";

let cNav = document.createElement("nav");
let cDivRow=document.createElement("div");
cDivRow.classList.add('row');
let cDivCol1 = document.createElement("div");
let cDivCol2 = document.createElement("div");
cDivCol1.classList.add('col');
let iLogo = document.createElement('img');
iLogo.setAttribute("src", "public/img/logo-horizontal-fond-noir-couleur.png");
iLogo.style.width="90%";
iLogo.style.margin="auto";
iLogo.style.paddingTop="2rem";
// iLogo.style.paddingleft="0.5rem";

cDivCol1.appendChild(iLogo);
// cDivCol1.appendChild(iLogo);
cDivCol2.classList.add('col');

let cUl=document.createElement('ul');
cUl.style.width="50%";
cUl.style.margin="auto"
cUl.style.listStyle="none"
cUl.style.display="flex";
cUl.style.gap="1rem";
cUl.style.fontSize="14px";
cUl.style.width="100%";
cUl.style.padding="1rem";
let cLi1=document.createElement('li');

let aLi1=document.createElement('a');
let paraLi1=document.createElement('p');
paraLi1.innerHTML="HOME";
let imageli1 = document.createElement("img");
imageli1.setAttribute("src","public/img/home-icon.png");

aLi1.append(imageli1,paraLi1);
cLi1.appendChild(aLi1);
cLi1.style.textAlign="center";

let cLi2=document.createElement('li');

let aLi2=document.createElement('a');
let paraLi2=document.createElement('p');
paraLi2.innerHTML="PACKAGES";
let imageli2 = document.createElement("img");
imageli2.setAttribute("src","public/img/packages-icon.png");
aLi2.append(imageli2,paraLi2);
cLi2.appendChild(aLi2);
cLi2.style.textAlign="center";


let cLi3=document.createElement('li');

let aLi3=document.createElement('a');
let paraLi3=document.createElement('p');
paraLi3.innerHTML="OUTILS";
let imageli3 = document.createElement("img");
imageli3.setAttribute("src","public/img/outils-icon.png");
aLi3.append(imageli3,paraLi3);
cLi3.appendChild(aLi3);
cLi3.style.textAlign="center";

let cLi4=document.createElement('li');

let aLi4=document.createElement('a');
let paraLi4=document.createElement('p');
paraLi4.innerHTML="PROJETS";
let imageli4 = document.createElement("img");
imageli4.setAttribute("src","public/img/projets-icon.png");
aLi4.append(imageli4,paraLi4);
cLi4.appendChild(aLi4);
cLi4.style.textAlign="center";

let cLi5=document.createElement('li');

let aLi5=document.createElement('a');
let paraLi5=document.createElement('p');
paraLi5.innerHTML="TEMOIGNAGES";
let imageli5 = document.createElement("img");
imageli5.setAttribute("src","public/img/temoignages-icon.png");

aLi5.append(imageli5,paraLi5);
cLi5.appendChild(aLi5);
cLi5.style.textAlign="center";

let cLi6=document.createElement('li');

let aLi6=document.createElement('a');
let paraLi6=document.createElement('p');
paraLi6.innerHTML="CONTACT";
let imageli6 = document.createElement("img");
imageli6.setAttribute("src","public/img/contact-icon.png");

aLi6.append(imageli6,paraLi6);
cLi6.appendChild(aLi6);
cLi6.style.textAlign="center";

cUl.append(cLi1,cLi2,cLi3,cLi4,cLi5,cLi6);
cDivCol2.appendChild(cUl);
cDivRow.append(cDivCol1,cDivCol2)
cNav.appendChild(cDivRow)
cHeader.appendChild(cNav);

//Fin de la Partie header(Nav)

//debut de la section1
let cSect1=document.createElement("section");
cSect1.style.textAlign="center";
let divSec1row=document.createElement("div");
divSec1row.classList.add("row");
divSec1row.style.padding="3rem";
cSect1.style.backgroundColor="blue";
cSect1.style.color="#fff";
let div1Sec1 = document.createElement('div');

div1Sec1.classList.add('col-4');
let cImgSec1=document.createElement('img');
cImgSec1.setAttribute("src","./public/img/packages.png");

div1Sec1.appendChild(cImgSec1);

let div2Sec1 = document.createElement('div');
div2Sec1.classList.add('col-8');
let paraSec1 =document.createElement("p");
paraSec1.innerHTML="A chaque étape son pack";
paraSec1.style.fontSize="35px";
let para2Sec1  = document.createElement("span");
para2Sec1.innerHTML="naître, grandir et prospérer.";
para2Sec1.style.fontSize="16px";
div2Sec1.append(paraSec1,para2Sec1);
divSec1row.append(div1Sec1,div2Sec1);
cSect1.append(divSec1row);
//fin de la section1



//debut de la section2
let cSect2=document.createElement("section");
let h3Sect2 = document.createElement("h3");
h3Sect2.style.backgroundColor=""
h3Sect2.innerHTML="Eclosion";
h3Sect2.style.textAlign="center";
h3Sect2.style.backgroundColor="blue";
h3Sect2.style.color="#fff";
h3Sect2.style.width="20%";
h3Sect2.style.margin="auto";
h3Sect2.style.padding="1rem";
h3Sect2.style.marginTop="2rem";
h3Sect2.style.marginBottom="2rem";
cSect2.appendChild(h3Sect2);

let div1Sec2Row =document.createElement("div");
div1Sec2Row.classList.add("row");
let div1Sec2 =document.createElement("div");
div1Sec2.classList.add("col");
let imgSec2 =document.createElement('img');
imgSec2.setAttribute("src","./public/img/icon-eclosion.png");
div1Sec2.appendChild(imgSec2);

let div2Sec2 =document.createElement("div");
div2Sec2.classList.add("col");
let para1Sec2=document.createElement("p");
para1Sec2.innerText="Lorem est perfait Lorem est perfait Lorem est.";
let para2Sec2=document.createElement("p");
para2Sec2.innerText="il comprende la création lorem comprende la création lorem comprende la création lorem  comprende la création lorem comprende la création lorem.";
div2Sec2.append(para1Sec2,para2Sec2);
div1Sec2Row.append(div1Sec2,div2Sec2);
div1Sec2Row.style.padding="2rem";
div1Sec2Row.style.fontSize="17px";
cSect2.append(div1Sec2Row);
//fin de la section2


//debut de la section3
let cSect3 = document.createElement('section');
cSect3.style.backgroundColor="red";
cSect3.style.color="white";
let divSec3Row = document.createElement('div');
divSec3Row.classList.add('row');
divSec3Row.style.padding="2.5rem";
divSec3Row.style.paddingBottom="0.5rem";
divSec3Row.style.textAlign="center";

let div1Sec3 = document.createElement('div');
div1Sec3.classList.add('col');
let img1Sec3 = document.createElement('img');
img1Sec3.setAttribute("src","./public/img/Logo-logo.png");
let para1sec3 = document.createElement("p");
para1sec3.innerText="Logo";
div1Sec3.append(img1Sec3,para1sec3);

let div2Sec3 = document.createElement('div');
div2Sec3.classList.add('col');
let img2Sec3 = document.createElement('img');
img2Sec3.setAttribute("src","./public/img/icon-charte-graphic.png");
let para2sec3 = document.createElement("p");
para2sec3.innerText="Charte graphique";
div2Sec3.append(img2Sec3,para2sec3);

let div3Sec3 = document.createElement('div');
div3Sec3.classList.add('col');
let img3Sec3 = document.createElement('img');
img3Sec3.setAttribute("src","./public/img/site-single-page.png")
let para3sec3 = document.createElement("p");
para3sec3.innerText=" Site single page";
div3Sec3.append(img3Sec3,para3sec3);

let div4Sec3 = document.createElement('div');
div4Sec3.classList.add('col');
let img4Sec3 = document.createElement('img');
img4Sec3.setAttribute("src","./public/img/carte-visite.png");
img4Sec3.style.width="30%";
let para4sec3 = document.createElement("p");
para4sec3.innerText=" Carte de visite";
div4Sec3.append(img4Sec3,para4sec3);
para1sec3.style.padding="1rem";
para2sec3.style.padding="1rem";
para3sec3.style.padding="1rem";
para4sec3.style.padding="1rem";
img1Sec3.style.width="50%";
img2Sec3.style.width="50%";
img3Sec3.style.width="50%";
img4Sec3.style.width="50%";
divSec3Row.append(div1Sec3,div2Sec3,div3Sec3,div4Sec3);
cSect3.append(divSec3Row);
//fin de la section3

//debut de la section4
let cSect4=document.createElement("section");
let h3Sect4 = document.createElement("h3");
h3Sect4.style.backgroundColor=""
h3Sect4.innerHTML="Evolution";
h3Sect4.style.textAlign="center";
h3Sect4.style.backgroundColor="blue";
h3Sect4.style.color="#fff";
h3Sect4.style.width="20%";
h3Sect4.style.margin="auto";
h3Sect4.style.padding="1rem";
h3Sect4.style.marginTop="2rem";
h3Sect4.style.marginBottom="2rem";
cSect4.appendChild(h3Sect4);

let div1Sec4Row =document.createElement("div");
div1Sec4Row.classList.add("row");
let div1Sec4 =document.createElement("div");
div1Sec4.classList.add("col");
let imgSec4 =document.createElement('img');
imgSec4.setAttribute("src","./public/img/icon-evolution.png");
div1Sec4.appendChild(imgSec4);

let div2Sec4 =document.createElement("div");
div2Sec4.classList.add("col");
let para1Sec4=document.createElement("p");
para1Sec4.innerText="Lorem est perfait Lorem est perfait Lorem est.";
let para2Sec4=document.createElement("p");
para2Sec4.innerText="il comprende la création lorem comprende la création lorem comprende la création lorem  comprende la création lorem comprende la création lorem.";
div2Sec4.append(para1Sec4,para2Sec4);
div1Sec4Row.append(div1Sec4,div2Sec4);
div1Sec4Row.style.padding="2rem";
div1Sec4Row.style.fontSize="17px";
cSect4.append(div1Sec4Row);
//fin de la section4


//debut de la section5
let cSect5 = document.createElement('section');
cSect5.style.backgroundColor="red";
cSect5.style.color="white";
let divSec5Row = document.createElement('div');
divSec5Row.classList.add('row');
divSec5Row.style.padding="2.5rem";
divSec5Row.style.textAlign="center";

let div1Sec5 = document.createElement('div');
div1Sec5.classList.add('col');
let img1Sec5 = document.createElement('img');
img1Sec5.setAttribute("src","./public/img/Logo-logo.png");
let para1sec5 = document.createElement("p");
para1sec5.innerText="Logo";
div1Sec5.append(img1Sec5,para1sec5);

let div2Sec5 = document.createElement('div');
div2Sec5.classList.add('col');
let img2Sec5 = document.createElement('img');
img2Sec5.setAttribute("src","./public/img/icon-charte-graphic.png");
let para2sec5 = document.createElement("p");
para2sec5.innerText="Charte graphique";
div2Sec5.append(img2Sec5,para2sec5);

let div3Sec5 = document.createElement('div');
div3Sec5.classList.add('col');
div3Sec5.style.paddingTop="3rem"
let img3Sec5 = document.createElement('img');
img3Sec5.setAttribute("src","./public/img/site-single-page.png")
let para3sec5 = document.createElement("p");
para3sec5.innerText=" Site single page";
div3Sec5.append(img3Sec5,para3sec5);

let div4Sec5 = document.createElement('div');
div4Sec5.classList.add('col');
let img4Sec5 = document.createElement('img');
img4Sec5.setAttribute("src","./public/img/carte-visite.png");
img4Sec5.style.width="30%";
let para4sec5 = document.createElement("p");
para4sec5.innerText=" Carte de visite";
div4Sec5.append(img4Sec5,para4sec5);

let div5Sec5 = document.createElement('div');
div5Sec5.classList.add('col');
let img5Sec5 = document.createElement('img');
img5Sec5.setAttribute("src","./public/img/carte-visite.png");
img5Sec5.style.width="30%";
let para5sec5 = document.createElement("p");
para5sec5.innerText=" Réseaux sociaux";
div5Sec5.append(img5Sec5,para5sec5);

para1sec5.style.padding="1rem";
para2sec5.style.padding="1rem";
para3sec5.style.padding="1rem";
para4sec5.style.padding="1rem";
para5sec5.style.padding="1rem";
img1Sec5.style.width="60%";
img2Sec5.style.width="60%";
img3Sec5.style.width="60%";
img4Sec5.style.width="60%";
img5Sec5.style.width="60%";
divSec5Row.append(div1Sec5,div2Sec5,div3Sec5,div4Sec5,div5Sec5);
cSect5.append(divSec5Row);

//fin de la section5


//Debut de la section6
let cSect6=document.createElement("section");
let h3Sect6 = document.createElement("h3");
h3Sect6.style.backgroundColor=""
h3Sect6.innerHTML="Envol";
h3Sect6.style.textAlign="center";
h3Sect6.style.backgroundColor="blue";
h3Sect6.style.color="#fff";
h3Sect6.style.width="20%";
h3Sect6.style.margin="auto";
h3Sect6.style.padding="1rem";
h3Sect6.style.marginTop="2rem";
h3Sect6.style.marginBottom="2rem";
cSect6.appendChild(h3Sect6);

let div1Sec6Row =document.createElement("div");
div1Sec6Row.classList.add("row");
let div1Sec6 =document.createElement("div");
div1Sec6.classList.add("col");
let imgSec6 =document.createElement('img');
imgSec6.setAttribute("src","./public/img/icon-envole.png");
div1Sec6.appendChild(imgSec6);

let div2Sec6 =document.createElement("div");
div2Sec6.classList.add("col");
let para1Sec6=document.createElement("p");
para1Sec6.innerText="Lorem est perfait Lorem est perfait Lorem est.";
let para2Sec6=document.createElement("p");
para2Sec6.innerText="il comprende la création lorem comprende la création lorem comprende la création lorem  comprende la création lorem comprende la création lorem.";
div2Sec6.append(para1Sec6,para2Sec6);
div1Sec6Row.append(div1Sec6,div2Sec6);
div1Sec6Row.style.padding="2rem";
div1Sec6Row.style.fontSize="17px";
cSect6.append(div1Sec6Row);
//fin de la section6

//debut de la section7

let cSect7 = document.createElement('section');
cSect7.style.backgroundColor="red";
cSect7.style.color="white";
let divSec7Row = document.createElement('div');
divSec7Row.classList.add('row');
divSec7Row.style.padding="2.5rem";
divSec7Row.style.paddingBottom="0.5rem";
divSec7Row.style.textAlign="center";

let div1Sec7 = document.createElement('div');
div1Sec7.classList.add('col');
let img1Sec7 = document.createElement('img');
img1Sec7.setAttribute("src","./public/img/Logo-logo.png");
let para1sec7 = document.createElement("p");
para1sec7.innerText="Logo";
div1Sec7.append(img1Sec7,para1sec7);

let div2Sec7 = document.createElement('div');
div2Sec7.classList.add('col');
let img2Sec7 = document.createElement('img');
img2Sec7.setAttribute("src","./public/img/icon-charte-graphic.png");
let para2sec7 = document.createElement("p");
para2sec7.innerText="Charte graphique";
div2Sec7.append(img2Sec7,para2sec7);

let div3Sec7 = document.createElement('div');
div3Sec7.classList.add('col');
let img3Sec7 = document.createElement('img');
img3Sec7.setAttribute("src","./public/img/site-single-page.png")
let para3sec7 = document.createElement("p");
para3sec7.innerText=" Site single page";
div3Sec7.append(img3Sec7,para3sec7);

let div4Sec7 = document.createElement('div');
div4Sec7.classList.add('col');
let img4Sec7 = document.createElement('img');
img4Sec7.setAttribute("src","./public/img/carte-visite.png");
img4Sec7.style.width="30%";
let para4sec7 = document.createElement("p");
para4sec7.innerText=" Carte de visite";
div4Sec7.append(img4Sec7,para4sec7);
para1sec7.style.padding="1rem";
para2sec7.style.padding="1rem";
para3sec7.style.padding="1rem";
para4sec7.style.padding="1rem";
img1Sec7.style.width="50%";
img2Sec7.style.width="50%";
img3Sec7.style.width="50%";
img4Sec7.style.width="50%";
divSec7Row.append(div1Sec7,div2Sec7,div3Sec7,div4Sec7);
cSect7.append(divSec7Row);
//fin de la section7

//debut de footer
let footer = document.createElement("footer");
footer.style.backgroundColor="#000";
footer.style.color="#fff";

let divRowgeneralFooter = document.createElement("div");
divRowgeneralFooter.style.width="90%";
divRowgeneralFooter.style.margin="auto";
divRowgeneralFooter.classList.add("row");
divRowgeneralFooter.style.padding="2.5rem";

//footer first col with packs text and 3 img
let divCol1footer1 = document.createElement("div");
divCol1footer1.classList.add("col");

let para1footer1=document.createElement("p");
para1footer1.innerText="Packs";
let divSouRow1footer1 =document.createElement("div");
divSouRow1footer1.classList.add("row");

let divCol1SousColfooter1 = document.createElement("div");
divCol1SousColfooter1.classList.add('col');
let img1footer1 = document.createElement("img");
img1footer1.setAttribute("src","./public/img/icon-eclosion.png");

let divCol2SousColfooter1 = document.createElement("div");
divCol2SousColfooter1.classList.add('col');
let img2footer1 = document.createElement("img");
img2footer1.setAttribute("src","./public/img/icon-eclosion.png");

let divCol3SousColfooter1 = document.createElement("div");
divCol3SousColfooter1.classList.add('col');
let img3footer1 = document.createElement("img");
img3footer1.setAttribute("src","./public/img/icon-eclosion.png");
img1footer1.style.width="30%";
img2footer1.style.width="30%";
img3footer1.style.width="30%";

divCol1SousColfooter1.append(img1footer1,img2footer1,img3footer1);
divSouRow1footer1.append(divCol1SousColfooter1);
divCol1footer1.append(para1footer1,divSouRow1footer1);
divCol1footer1.style.margin="1rem";
//fin de footer first col with packs text and 3 img

//debut de footer second col with outils text and 3 img
let divCol1footer2 = document.createElement("div");
divCol1footer2.classList.add("col");

let para1footer2=document.createElement("p");
para1footer2.innerText="Outils";
let divSouRow1footer2 =document.createElement("div");
divSouRow1footer1.classList.add("row");

let divCol1SousColfooter2 = document.createElement("div");
divCol1SousColfooter2.classList.add('col');
let img1footer2 = document.createElement("img");
img1footer2.setAttribute("src","./public/img/icon-eclosion.png");

let divCol2SousColfooter2 = document.createElement("div");
divCol2SousColfooter1.classList.add('col');
let img2footer2 = document.createElement("img");
img2footer2.setAttribute("src","./public/img/icon-eclosion.png");

let divCol3SousColfooter2 = document.createElement("div");
divCol3SousColfooter2.classList.add('col');
let img3footer2 = document.createElement("img");
img3footer2.setAttribute("src","./public/img/icon-eclosion.png");
img1footer2.style.width="30%";
img2footer2.style.width="30%";
img3footer2.style.width="30%";

divCol1SousColfooter2.append(img1footer2,img2footer2,img3footer2);
divSouRow1footer2.append(divCol1SousColfooter2);
divCol1footer2.append(para1footer2,divSouRow1footer2);
divCol1footer2.style.margin="1rem";
//fin de footer second col with outils text and 3 img

//debut de footer third col with Social media text and 3 img
let divCol1footer3 = document.createElement("div");
divCol1footer3.classList.add("col");

let para1footer3=document.createElement("p");
para1footer3.innerText="Social media";
let divSouRow1footer3 =document.createElement("div");
divSouRow1footer3.classList.add("row");

let divCol1SousColfooter3 = document.createElement("div");
divCol1SousColfooter3.classList.add('col');
let img1footer3 = document.createElement("img");
img1footer3.setAttribute("src","./public/img/icon-eclosion.png");

let divCol2SousColfooter3 = document.createElement("div");
divCol2SousColfooter3.classList.add('col');
let img2footer3 = document.createElement("img");
img2footer3.setAttribute("src","./public/img/icon-eclosion.png");

let divCol3SousColfooter3 = document.createElement("div");
divCol3SousColfooter3.classList.add('col');
let img3footer3 = document.createElement("img");
img3footer3.setAttribute("src","./public/img/icon-eclosion.png");
img1footer3.style.width="30%";
img2footer3.style.width="30%";
img3footer3.style.width="30%";

divCol1SousColfooter3.append(img1footer3,img2footer3,img3footer3);
divSouRow1footer3.append(divCol1SousColfooter3);
divCol1footer3.append(para1footer3,divSouRow1footer3);
divCol1footer3.style.margin="1rem";


//petit txt C.G.V

let piedDePage = document.createElement("p");
piedDePage.innerText="C.G.V";
piedDePage.style.opacity="90%"
piedDePage.style.paddingBottom="1rem";
piedDePage.style.paddingRight="1rem";
piedDePage.style.color="#fff";
piedDePage.style.display="flex";
piedDePage.style.justifyContent="flex-end";
//fin de la petit txt C.G.V


//fin de footer third col with Social media text and 3 img



//fin  de footer first col with Social media text and 3 img


divRowgeneralFooter.append(divCol1footer1,divCol1footer2,divCol1footer3);
footer.append(divRowgeneralFooter,piedDePage);
//fin  de footer


body.append(cHeader,cSect1,cSect2,cSect3,cSect4,cSect5,cSect6,cSect7,footer);

















//debut des fontions à revoir 
function creatSec(sect) {
    sect=document.createElement("section");
    // body.appendChild(sect);
}
// creatSec();


function creatDiv(deev) {
    deev=document.createElement("div");
    // body.appendChild(deev);
}
// creatDiv();
// let sectionn = creatSec();
// let dive = creatDiv();
// sectionn.append(dive);
// body.append(sectionn);

//fin des fontions à revoir 

