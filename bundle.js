(()=>{var g=`
<h1 class="titreeffet">Gavin Romain</h1>
<p id="info">D\xE9veloppeur Javascript fullstack Junior</p>
<p>34 ans</p>
<p>Montpellier</p>
`,v=` 
<h1 class="titreeffet">Skills</h1>
`,d=`
<h1 class="titreeffet">Projets</h1>


<img id="flechegauchepixel" src="./ressources/img/flechegauche.png" alt="">
<img id="flechedroitepixel" src="./ressources/img/flechedroite.png" alt="">
<p id="descriptionpixel"><p/>`,x=`
<h1 class="titreeffet">Contact</h1>
<div id="infocontact">
<p>Mail : romain.gavin@outlook.fr 
<span><img id="mailcopie"src="./ressources/img/copie.png" alt=""></span>
</p>
<p>Tel : 07.51.13.35.62 
<span>
<img id="telcopie"src="./ressources/img/copie.png" alt="">
</span>
</p>
</div>`;var f=[{titre:"Javascript (Vanilla) / Svelte, React, Electron)",img:"./ressources/img/technos/js.webp"},{titre:"HTML/CSS",img:"./ressources/img/technos/htmlcss.webp"},{titre:"NodeJS (Express, Socket.io)",img:"./ressources/img/technos/nodejs.webp"},{titre:"Phaser3",img:"./ressources/img/technos/phaser.webp"},{titre:"Design",img:"./ressources/img/technos/art.webp"}],r=['Site parc (Premier site) <span class="lien">Lien<span/>','Site Mode (maquette) <span class="lien">Lien<span/>','Jeu Desktop (socket.io + PhaserJS)<span class="lien"><span/>','Librairie NPM <span class="lien">Lien<span/>','Appli Wiki StarWars <span class="lien">Lien<span/>'],h=["./ressources/img/pixelart/1.png","./ressources/img/pixelart/1.png","./ressources/img/pixelart/1.png","./ressources/img/pixelart/1.png","./ressources/img/pixelart/1.png"],o={boutton:new Audio("../ressources/sons/boutton.mp3"),boutton2:new Audio("../ressources/sons/boutton3.mp3")};function n(t,c){let l=c;if(t==="acceuil")l.innerHTML=g;else if(t==="articles")l.innerHTML=v,f.forEach(u=>{let m=e.element("p",".titrerecits");m.innerHTML=`${u.titre}   <img class="logoskill"src="${u.img}" alt="" srcset="">`,s.appendChild(m)});else if(t==="creations")l.innerHTML=d;else if(t==="contact")l.innerHTML=x;else return}function b(){o.boutton.volume=.1,o.boutton.play();let t=e.element("img",".imgpixel"),c=e.element("div","#blockimgpixel");s.appendChild(c),c.appendChild(t),t.src=`./ressources/img/pixelart/${[i.value]}.webp`,document.querySelector("#flechegauchepixel").classList.remove("invisible"),document.querySelector("#flechedroitepixel").classList.remove("invisible"),document.querySelector("#descriptionpixel").innerHTML=r[i.value],e.event("#flechegauchepixel","click",()=>{o.boutton.volume=.1,o.boutton.play(),i.value!=0&&(i.value--,document.querySelector("#descriptionpixel").innerHTML=r[i.value],t.src=`./ressources/img/pixelart/${[i.value]}.webp`,p())}),e.event("#flechedroitepixel","click",()=>{o.boutton.volume=.1,o.boutton.play(),i.value<h.length-1&&(i.value++,document.querySelector("#descriptionpixel").innerHTML=r[i.value],t.src=`./ressources/img/pixelart/${[i.value]}.webp`,p())}),p()}function p(){i.value===0?e.event(".lien","click",()=>{window.open("https://overwatchworld.netlify.app")}):i.value===1?e.event(".lien","click",()=>{window.open("https://cv-rom.herokuapp.com/mode")}):i.value===2||(i.value===3?e.event(".lien","click",()=>{window.open("https://www.npmjs.com/package/@rom13/genius")}):i.value===4&&e.event(".lien","click",()=>{window.open("https://starwarsworld.netlify.app")}))}var e=$,a="acceuil",s=document.querySelector("#contenupagehtml"),i={value:0};e.event("#acceuil","click",()=>{n("acceuil",s)});e.event("#articles","click",()=>{a="articles",n("articles",s)});e.event("#contact","click",()=>{a="contact",n("contact",s),e.event("#mailcopie","click",t=>{o.boutton.volume=.1,o.boutton2.play();let c=e.element("p","#textecopie");e.textContent("copi\xE9","#textecopie"),c.style.left=t.clientX+20+"px",c.style.top=t.clientY-20+"px",e.timeursecondes(.5,()=>{c.remove()}),document.querySelector("#telcopie").src="./ressources/img/copie.png",t.target.src="./ressources/img/copie2.png",navigator.clipboard.writeText("romain.gavin@outlook.fr")}),e.event("#telcopie","click",t=>{o.boutton.volume=.1,o.boutton2.play();let c=e.element("p","#textecopie");e.textContent("copi\xE9","#textecopie"),c.style.left=t.clientX+20+"px",c.style.top=t.clientY-20+"px",e.timeursecondes(.5,()=>{c.remove()}),document.querySelector("#mailcopie").src="./ressources/img/copie.png",t.target.src="./ressources/img/copie2.png",navigator.clipboard.writeText("0751133562")})});e.event("#creations","click",()=>{o.boutton.volume=.1,o.boutton.play(),n("creations",s),a="creations",i.value=0,b()});onload=()=>{particlesJS.load("particles","json.json")};oncontextmenu=()=>!1;var k=document.querySelectorAll("li");k.forEach(t=>{t.addEventListener("click",function(){o.boutton.volume=.1,o.boutton.play()})});})();
