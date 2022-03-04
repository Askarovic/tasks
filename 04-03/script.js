/* let BtnStart = document.getElementById('start');
let resultBtn = document.getElementById('result');

let result;
let prm;
result = 0;

let function1 = () => {
    prm = prompt('Введите число')
    while(prm!=99){
    result += 1
    prm = prompt('Введите число')
} return result
 }

 BtnStart.onclick = function1;

 resultBtn.onclick = () => {
     alert(`Кол-во чисел - ${result}`)
 } */
/* 
 let BtnStart = document.getElementById('start');
let resultBtn = document.getElementById('result');
 let result;
 let prm;
 result = 0;
 let function1 = () => {
     prm = prompt ('Введите число')
     while(prm != 999){
         result += 1
         prm = prompt('Введите число')
     } return result
 }

 BtnStart.onclick = function1;

 resultBtn.onclick = () => {
    alert(`кол-во чисел ${result}`)
     }
 */
let btnSum = document.getElementById('main')
let btnSum = document.getElementById('sc')

     let getSum = () => {
         let sum = 0;
         let pro = prompt('Введите число')
        while(pro != 999){
           
            sum += Number(pro)
            i++;
            pro = prompt('Введи другое число')
        }return alert(sum)
     }

     btnSum.onclick = getSum;
     btnSum.onclick = () => {
         alert('кол-во чисел - ${i}')
     }

     let date = new Date;

     function getDate(){
         let year = prompt('Введите год рождения')
         let fulyaer = date.getFullYear()
     }
     let getDate = () => {
         let year = prompt('Введите год рождения');
         return fulyaer 
     }
     alert(`тебе ${getDate} лет`)