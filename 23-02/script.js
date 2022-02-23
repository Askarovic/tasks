/* const userSalaries = {
    Ella : 43000,
    Sophia : 30000,
    Ellie : 50000
}
console.log(`${userSalaries.Ella} ${userSalaries.Sophia}`) */

/* 2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10. 
   Найдите сумму его элементов. */

   /* const user = {
       a : 5,
       b : 6,
       c : 10
   }
   console.log(user.a+user.b+user.c) */

//    3) 
  /*  let number;
  if(data === true){
     number = 3,
  } else{
     number = 5,
  }
    console.log(data === number ? 3 : 5); */
  /* Сделайте рефакторинг кода, с помощью тернарного оператора. */

  const askUser = prompt('Кто такой В.В Путин?')
  if(askUser ==='Президент'|| askUser ==='президент'){
      alert('Верно!')
  }else alert('Не знаете?')