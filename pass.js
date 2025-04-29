let userName = prompt('Хто там?', '');

if (userName === 'Admin') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Господар') {
    alert( 'Ласкаво просимо!' );
  } else if (pass === '' || pass === null) {
    alert( 'Скасовано' );
  } else {
    alert( 'Неправильний пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Скасовано' );
} else {
  alert( 'Я вас не знаю' );
}   
    
    
   


