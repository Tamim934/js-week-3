//dom document object module
// bom browser object module
// alert("hi") // give a alert to the browser
// let box = document.querySelector(".box") // get the div and you can use ALL to get all div
// console.log(box.innerHTML = "new text") // innet html can change the div 
// box.style.color="red"//styleing a element
// box.style.fontSize="100px";
// let p= document.createElement("p");// create a new element that you cN dd to html
// p.innerHTML ="tamim";// paste the element tpo gtml
// box.appendChild(p)// add the lement to html
// // p.style.color="green"
// // p.style.fontSize="40px"
// // p.style.marginLeft="100px"
// // creating a css viea js
// p.classList.add("p")// add a class so you ca use it on css
// console.log(h1)
// clicking abutton
// let btn= document.createElement("button");

// btn.innerHTML ="hello";
// btn.onclick = function (){
// //    btn.classList.add("add") ;
//    let tam = document.createElement("h1");
//    tam.innerHTML ="bye";
//    box.appendChild(tam)
//    tam.classList.add("shavkat");
// };

// box.appendChild(btn)

// task1
let inp1=document.querySelector(".inp1")
let inp2=document.querySelector(".inp2")
let btn1=document.querySelector(".btn1")
let resultmax=document.querySelector(".resultmax")
btn1.onclick = function(){
inp1.value>inp2.value?resultmax.innerHTML = inp1.value:resultmax.innerHTML = inp2.value
}
// taask2
let inpp=document.querySelector(".inpp")
let btn2=document.querySelector(".btn2")
btn2.onclick = function(){
    alert(inpp.value)
}
//task3
let input1=document.querySelector(".input1")
let btn10=document.querySelector(".btn10")
let para=document.querySelector(".para")
btn10.onclick= function(){
    if(input1.value<10){
        return para.innerHTML=("welcome")
    }
    else {
        return para.innerHTML=("goodbye")
    }
}
// task4
let plus=document.querySelector(".plus")
let reset=document.querySelector(".reset")
let mi=document.querySelector(".mi")
let map=document.querySelector(".map")
let sum=0
plus.onclick = function(){
    sum++
    map.innerHTML=(sum)
   
}
reset.onclick = function(){
    map.innerHTML=(0)
}
let minus=0
mi.onclick = function(){
minus--
map.innerHTML=(minus)
}
// task 5
let joker=document.querySelector(".joker")
let batman=document.querySelector(".batman")
let ice=document.querySelector(".ice")
batman.onclick = function(){
  
let factorial = 1;

if (joker.value < 0) {
    ice.innerHTML=("Error! Factorial for negative joker.value does not exist.");
}
else if (joker.value === 0) {
    ice.innerHTML=("The factorial of 0 is 1.");
}
else {
    for (let i = 1; i <= joker.value; i++) {
        factorial *= i;
    }
    ice.innerHTML=(`The factorial of ${joker.value} is ${factorial}.`);
}

}
//task 6
const button = document.createElement("button");
button.innerHTML = "Turn on/off";
document.body.appendChild(button);

const img = document.createElement("img");
img.src = "/images/new off.jpeg";
document.body.appendChild(img);

let isOn = false;

button.addEventListener("click", () => {
  if (isOn) {
   img.src = "/images/data (1).jpeg";
    isOn = false;
  } else { 
    img.src = "/images/new off.jpeg";
    isOn = true;
  }
});
// task 7
//man
let newimg= document.createElement("img")
newimg.src = "/images/man.jpg"
newimg.classList.add("img2")
document.body.appendChild(newimg)
let parag=document.createElement("h1")
parag.innerHTML=("john deo")
document.body.appendChild(parag)
let newp=document.createElement("p")
newp.innerHTML=("Architect & enginer")
document.body.appendChild(newp)
//woman
let woman=document.createElement("img")
woman.src = "/images/woamn.jpg";
woman.classList.add("wm")
document.body.appendChild(woman)
let parag2=document.createElement("h1")
parag2.classList.add("pa")
parag2.innerHTML=("jane deo")
document.body.appendChild(parag2)
let newp2=document.createElement("p")
newp2.innerHTML=("interir designer")
newp2.classList.add("pa2")
document.body.appendChild(newp2)

