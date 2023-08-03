let flag= true;
// Функуия изменения цвета
function changedColor() {
let element=document.getElementById("el1");
//let element=document.getElementById("btn");
element.classList.toggle('fire')
//конец


// изменение текста
if (element.textContent=="УРА!!!") element.textContent="ПОКА!"
    else element.textContent="УРА!!!"
}
let btn= document.getElementById ('btn');
console.log(btn);
btn.addEventListener('click',changedColor);
// Конец Click
// функция изщменения цвета первой кнопки
function changedColorP() {
    let element=document.getElementById("el2");
    //let element=document.getElementById("btn");
    element.classList.toggle('par1')
    }
    btn.addEventListener('click',changedColorP);

function changedColor1() {
    let element=document.getElementById("btn");   
    element.classList.toggle('butCol') 
}
btn.addEventListener('mouseover',changedColor1);
btn.addEventListener('mouseout',changedColor1);
//let element.classList.toggle()
// конец mouseover

function ageMy() {
alert ("День добрый!")
let text = prompt ("Твое имя?")
alert ("Здравствуте, "+ text)
let age = +prompt ("Введите Ваш возраст.до 18;18-30;30-60; после 60")

if (age<18) {
a=1} 
    else if (age>=18 & age<30){
        a=2 }
        else if (age>=30 &age<60)  {                 
            a=3}
             else 
                if(age>=60){
                    a=4}
switch (a) {
case 1:
alert( '1.Вам мало лет' );
break;
case 2:
alert( '2. Можно и погулять!' );
break;
case 3:
alert( '3.Завтра на работу' );
break;
default:
alert( "4.Вы на пенсии. Пора спать" );
}
}
let btn2= document.getElementById ('btn2');
btn2.addEventListener('click',ageMy);

