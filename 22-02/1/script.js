let x = 7;
if(x === 7){
    alert('Верно');
}
else(x > 9)
    alert('Неверно');


/* 2) Если переменная a равна или меньше 1, а переменная b больше или равна 3, 
   то выведите сумму этих переменных, иначе выведите их результат вычитания. */
   let a = 1;
   let b = 3;
   if( a <= 1 && b >= 3){
    alert(a + b);
   }else{
       alert(a-b)
        }

   /* 3) В переменной time лежит число от 0 до 59. Определите в какую четверть 
   часа попадает это число (в первую, вторую, третью или четвертую). 
   Например: если переменная time = 5, то она попадает в первую четверть. 
   В противном случае вывести "Значение не попадает в диапазон от 0 до 59". */

   let time = 5;
   if(time >= 0 && time <=15){
    alert('Первая');
   }
   if(time>=16 && time <= 30){
       alert('Вторая');
   }

   if(time>=31 && time <= 45){
       alert('Третья')
   }
   if(time>=46 && time <= 60){
       alert('Четвертая')
   }
   /* 4) Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
   Проверьте работу скрипта при test, равном true, false.  
   Напишите два варианта скрипта - с короткой записью и с длинной. */
   let test = true;
   if(test != true){
    alert('Верно');
   }else{
       alert('Неверно');
   }

   let test = true;
   let access = test != true ? 'Верно': 'Неверно' 
   alert(access);
  
