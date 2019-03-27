

pop = function()
{
    let check;
    let oui = ["oui", "ok", "yes", "da", "ya", "yess", "d'accord", "bien", "accepter", "j'accepte", "je vous suis"]; 
    let i = prompt("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please ! dit oui sinon fais gaffe 'non' lol tu as compris ?? stp");

   for (let count = 0; count < oui.length; count++) {
       check = oui[count];

       if (i == oui[count]) {
        document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
   }
}


/* je voulais faire d'une manière moins brute mais j'ai pas trouver de meilleur solution que de stocker dans un tableau ! */
window.setTimeout(pop, 10000);

function change_background()
{
     document.body.style.backgroundColor = "orange";
}

function hihi()
{
    document.body.style.backgroundColor = "green";
}

function transmode()
{
    let rand_color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    document.body.style.backgroundColor = rand_color;
}