const cards = [];
//רמה קלה
function easy() {
   pairs= 0;
   document.getElementById('victory-audio').pause();
   document.getElementById("audio").play();
   document.getElementById("header").innerHTML = "-DISNEY-";
   const flag = [0, 0, 0, 0, 0, 0];
   const img = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
   let place;
   //לולאה שמסדרת את הגרלת התמונות
   for (let i = 0; i < 12; i++) {
      do {
         place = Math.floor(Math.random() * 6);
      }
      while (flag[place] == 2)
      flag[place]++;
      img[i] = place;
   }
   ftimer(12, 40);
   //צביעת הכפתורים לפי הרמה שנמצאים
   document.getElementById("button1").style.backgroundColor = "#000000";
   document.getElementById("button1").style.color = "#ffffff";
   document.getElementById("button2").style.backgroundColor = "#ffffff";
   document.getElementById("button2").style.color = "#000000";
   document.getElementById("button3").style.backgroundColor = "#ffffff";
   document.getElementById("button3").style.color = "#000000";
   //יצירת קיבול לכרטיסים
   document.getElementById("main").innerHTML = "";
   const box = document.createElement("div");
   box.id = "box";
   main.appendChild(box);
   box.style.gridTemplateColumns = "repeat(4,1fr)";
   box.style.gridTemplateRows = "repeat(3,1fr)";
   //לולאה שמייצרת כרטיסים
   for (let j = 0; j < 12; j++) {
      cards[j] = document.createElement("img");
      cards[j].id = "cards";
      cards[j].style.width = "10vw";
      cards[j].style.height = "10vw";
      box.appendChild(cards[j]);
      cards[j].onclick = () => { change(cards[j], img[j], j, 12) }
   }
}

//רמה בינונית
function midy() {
   pairs= 0;
   document.getElementById('victory-audio').pause();
   document.getElementById("audio").play();
   document.getElementById("header").innerHTML = "-DISNEY-";
   const flag = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
   const img = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
   let place;
   //לולאה שמסדרת את הגרלת התמונות
   for (let i = 0; i < 20; i++) {
      do {
         place = Math.floor(Math.random() * 10);
      }
      while (flag[place] == 2)
      flag[place]++;
      img[i] = place;
   }
   ftimer(20, 60);
   //צביעת הכפתורים לפי הרמה שנמצאים
   document.getElementById("button1").style.backgroundColor = "#ffffff";
   document.getElementById("button1").style.color = "#000000";
   document.getElementById("button2").style.backgroundColor = "#000000";
   document.getElementById("button2").style.color = "#ffffff";
   document.getElementById("button3").style.backgroundColor = "#ffffff";
   document.getElementById("button3").style.color = "#000000";
   //יצירת קיבול לכרטיסים
   document.getElementById("main").innerHTML = "";
   const box = document.createElement("div");
   box.id = "box";
   main.appendChild(box);
   box.style.gridTemplateColumns = "repeat(5,1fr)";
   box.style.gridTemplateRows = "repeat(4,1fr)";
   //לולאה שמייצרת כרטיסים
   for (let j = 0; j < 20; j++) {
      cards[j] = document.createElement("img");
      cards[j].id = "cards";
      cards[j].style.width = "7.4vw";
      cards[j].style.height = "7.4vw";
      box.appendChild(cards[j]);
      cards[j].onclick = () => { change(cards[j], img[j], j, 20) };
   }
}

//רמה קשה
function hard() {
   pairs= 0;
   document.getElementById('victory-audio').pause();
   document.getElementById("audio").play();
   document.getElementById("header").innerHTML = "-DISNEY-";
   const flag = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
   const img = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
   let place;
   //לולאה שמסדרת את הגרלת התמונות
   for (let i = 0; i < 30; i++) {
      do {
         place = Math.floor(Math.random() * 15);
      }
      while (flag[place] == 2)
      flag[place]++;
      img[i] = place;
   }
   ftimer(30, 80);
   //צביעת הכפתורים לפי הרמה שנמצאים
   document.getElementById("button1").style.backgroundColor = "#ffffff";
   document.getElementById("button1").style.color = "#000000";
   document.getElementById("button2").style.backgroundColor = "#ffffff";
   document.getElementById("button2").style.color = "#000000";
   document.getElementById("button3").style.backgroundColor = "#000000";
   document.getElementById("button3").style.color = "#ffffff";
   //יצירת קיבול לכרטיסים
   document.getElementById("main").innerHTML = "";
   const box = document.createElement("div");
   box.id = "box";
   main.appendChild(box);
   box.style.gridTemplateColumns = "repeat(6,1fr)";
   box.style.gridTemplateRows = "repeat(5,1fr)";
   //לולאה שמייצרת כרטיסים
   for (let j = 0; j < 30; j++) {
      cards[j] = document.createElement("img");
      cards[j].id = "cards";
      cards[j].style.width = "6.5vw";
      cards[j].style.height = "6.5vw";
      box.appendChild(cards[j]);
      cards[j].onclick = () => { change(cards[j], img[j], j, 30) };
   }
}

let firstcard;
let lastcard;
let count = 0;
let pairs = 0;
let can = 1;
//פונקציית היפוך הכרטיס ובדיקה אם הפכו זוג
function change(card, img, num, mount) {
   if (can != 1) {
      return;
   }
   card.src = `pickters/${img}.jpg`;
   count++;
   //כרטיס ראשון
   if (count == 1) {
      firstcard = num;
   }
   //כרטיס שני
   if (count == 2) {
      lastcard = num;
      if (firstcard == lastcard) {
         can = 1;
         count = 1;
         return;
      }
      else {
         can = 0;
         count = 0;
         //בדיקה אם זה זוג ואם כן העלמת הכרטיסים האלו
         if (cards[firstcard].src == cards[lastcard].src) {
            pairs++;
            document.getElementById("header").innerHTML = "🙌" + "הצלחת: " + pairs + " זוגות";
            cards[firstcard].onclick = null;
            cards[lastcard].onclick = null;
            setTimeout(function () {
               cards[firstcard].style.opacity = "0";
               cards[lastcard].style.opacity = "0";
               can = 1;
            }, 550);
         }
         else {
            setTimeout(function () {
               cards[firstcard].src = `background.jpg`;
               cards[lastcard].src = `background.jpg`;
               can = 1;
            }, 600)
         }
      }
   }
}

let timer;
//טיימר שמגביל את זמן המשחק
function ftimer(mount, max) {
   let counter = max;
   clearInterval(timer);
   document.getElementById("footer").innerHTML = counter+" seconds";
   timer = setInterval(function () {
      counter--;
      document.getElementById("footer").innerHTML =  counter+" seconds";
      if (counter == 0 || 2 * pairs == mount) {
         clearInterval(timer);
         document.getElementById("footer").innerHTML = "Game over";
         document.getElementById("main").innerHTML = "";
         const masege = document.createElement("div");
         masege.id = "masege";
         main.appendChild(masege);
         const img = document.createElement("img");
         img.id = "img";
         masege.appendChild(img);
         img.src= `33l8.gif`;
         img.style.opacity= 0.5;
         if (2 * pairs == mount) {
            win(max - counter);
         }
         else {
            oops();
         }
         const x = document.createElement("button");
         x.id = "x";
         masege.appendChild(x);
         x.innerHTML = "X";
         x.onclick = function () {
            masege.style.display = "none";
               if(mount == 12)
               easy();
               else if(mount == 20)
               midy();
               else
               hard();
         };
      }
   }, 1000);
}
//במקרה שגמר למצוא את כל הכרטיסים
function win(time) {
   document.getElementById('audio').pause();
   document.getElementById('victory-audio').play();
   document.getElementById("header").innerHTML = "!!!👍ניצחת";
   document.getElementById("masege").innerHTML += "כל הכבוד✨!!! הצלחת להפוך את כל הכרטיסים ב-"+ time +" שניות";
   pairs = 0;
}
//במקרה שהזמן נגמר ולא גמר את הכרטיסים
function oops() {
   document.getElementById("masege").innerHTML += " חבל☹️!!! נגמר לך הזמן"+" הפכת " +pairs+ " !זוגות";
   pairs = 0;
}
// function fvoice(){
//    const voice = document.createElement("button");
//    voice.id= "voice";
//    document.getElementById("box").innerHTML = "🔇";
//    box.appendChild("voice");
//    voice.onclick= function(){
//       document.getElementById('audio').pause()
//    };
// }
