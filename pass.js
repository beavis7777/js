let userName = prompt('Хто там?', '');

if (userName === 'Beavis777') {

  let pass = prompt('Пароль?', '');

  if (pass === '9379992') {
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
    
    
   


