/* function hello(){
    alert("Привет, JavaScript!")
}
hello()

function calc(a=5){
   return a**3
}
console.log(calc())

 */
/* 
function getName(name){
    if(name==='Василий'){ 
        return 'Привет ' + name
    }else{
        return 'Привет, гость'
    }
    
}
alert(getName('Василий'))
alert(getName('capuccino' ))

 */

/* 4) На старте вы получаете массив. Необходимо написать функцию, которая будет  
   возвращать массив удвоенных значений исходного массива.
   Пример кода:
   example([1, 2, 3]) => [2, 4, 6]
   example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
   example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4] */

   function getName(n){
       const ask = [];
       for(i=0; i<n.length; i++){
        ask.push(n[i]*2)
       }
     return ask  
   } 
   console.log(getName([1,2,3]))
   console.log(getName([4,1,1,1,4]))
   console.log(getName([2, 2, 2, 2, 2, 2]))