var pr1 = prompt('Кто пришел?');

if(pr1===null){
alert('Вход отменен')
}else if(pr1==="Админ"){
    var pr2 = prompt('Пароль?')
    if(pr2==="Черный Властелин" || "черный властелин"){
        alert("Добро пожаловать!")
    }else if(pr2=== null){
        alert('Вход отменен')
    }
     else{
         alert('Я вас не знаю ')
     }
}else{
    alert('Я вас не знаю')
}

const arr = [1,23,4,5,34,8,67,23,4,7,8, -1, -4, -43]
const num = []
for (let i = 0; i < arr.length; i++) {
   
    if(arr[i] < 10 && arr[i] > 0) {
        num.push(arr[i])
    }
}
console.log(num)

const array = [1, 2, 5, 6, 88, 5]
let number = 0;
for (let i = 0; i < array.length; i++){
    number = number + array[i]
}console.log(number)

const querty = [2,4,6,8,29,24,32,42,52,62]
numm = 0
for (let i = 0; i < querty.length; i++){
    numm = querty[i]
    console.log(querty[i]*numm)
}