/* const name = 'Василий'; */

/* function getName(name = 'гость'){
    console.log(`Привет ${name}`)
}
const name = 'Василий';
getName() */


/* СТрелочные функции */


/* function  showMessage(){
    alert('Good morning');
}

let showMessage = () => {
    alert('Good morning')
}
showMessage(); */

/* let sum = (x,y) => x+y;
console.log(sum(5,10)); */

/* let calc = (a) => {
    return a * a;
    }
let result = calc(5);
console.log(result);
 */



/* Метод Map */

/* const countries = ['Japan', 'USA', 'Russia','China'];
countries.map((value,index,arr)=>{
    console.log(value);
    console.log(index)
    console.log(arr)
}) */

/* const numbers = [5,6,7];
let newArray = numbers.map((value)=>{
   return value*value;
})
console.log(newArray); */

/* let array = [10,20,30];

let double = array.map(
    function doubleNumber( currentValue ){
        return currentValue * 2;
    }
)

let double2 = array.map(currentValue => currentValue * 2);

console.log(double);
console.log(double2); */

/* Метод FILTER */

let myArray = [10,20,130,70,80,12];
let filtered = myArray.filter(
    function(currentValue){
        return currentValue > 50;
    }
)

let filtered2 = myArray.filter()