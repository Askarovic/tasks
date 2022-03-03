function hello(str1) {
    alert(str1)
};
setTimeout(hello, 4000, 'Hello after 4 seconds');
setTimeout(hello, 8000, 'Hello after 8 seconds', );

/* 2) Напишите функцию mul(n,m), которая принимает два аргумента и возвращает 
   произведение этих аргументов. */
   /* function mul(n,m){
      return n*m
   }
        mul(2,3) */

        /* 3) Создайте функцию и с помощью цикла найдите факториал числа 7:
   Название для функции можно дать любую.  
   Например при вызове функции factorial с параметром 7 в консоли должно  
   вывести следующее:

   factorial(7); //1*2*3*4*5*6*7 //5040 */
function factorial(a){
    let num = 1;
    for(let i=1; i<=a; i++ ){
        num *= i;
    }
    return num;
} 
console.log(factorial(7));