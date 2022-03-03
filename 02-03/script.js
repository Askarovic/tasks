/* let num = [2, 3, 4, 5, 6, 7];
let sum = 1;
for(i=0; i<num.length; i++){
    sum *= num[i]

} let obj = {
    result : sum
}
console.log(sum);
console.log(obj);
 */

/* reduce */

/* let myArray = [2, 3, 4, 5, 6, 7];
let result = myArray.reduce((sunElem,currentValue)=>{
      return sunElem*currentValue
},1)
console.log(result); */


/* 2) Напишите функцию, которая заполняет новый массив предоставленным значением 
   и затем ее возвращает. Функция должна первым параметром принимать 
   элемент (значение для массива), вторым параметром размер массива.  
   Например: myFunc('a', 3)   // ['a', 'a', 'a'] */

/* function nyFunc(text, num){
    let mas = [];

    for(i = 0; i < num; i++){
        mas.push(text)
    }

    return mas
}

console.log(nyFunc('a', 3)) */

/* 3) Напишите функцию, которая разворачивает массив в обратном порядке 
   и затем ее возвращает.  Функция наша  принимает массив любых элементов.      
   Например:
   const data = [1, 2, 3]; 
   myFunc(data);  // [3, 2, 1]; */

   /* const data = [1,2,3];
   function myFunc(data){
       let mas = [];
       for(let i = data.length - 1; i >= 0; i--){
           mas.push(data[i])
       }
       return mas;
   }

   console.log(myFunc(data)) */



 