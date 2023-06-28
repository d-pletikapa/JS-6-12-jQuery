jQuery('.header__sign2').text('Привет мир!');
const text = jQuery('.header__sign2').text();
const html = jQuery('.header').html();
console.log(text);
console.log(html);

const headerSign = $('.header__sign2');
console.log('🚀 ~ headerSign:', headerSign);
const elem = $('.what-building__text');

console.log(elem.parent());
console.log(elem.parents('body'));
console.log(elem.parents('.container'));

elem.click(function () {
  $(this).parents('.what-building__item')
  .css('background-color', 'red');
});

const elem2 = $('.what-building__item');

elem2.click(function () {
  console.log($(this)
  .find('.what-building__text')
  .text());

  console.log($(this)
  .find('.img')
  .css({
    backgroundColor: 'red',
    height: '50px',
    width: '50px',
  }));
});

// Сиблинги соседние элементы
const elem3 = $('.navigation__item');
elem3.click(function () {
  console.log('prev', $(this).prev());
  console.log('next', $(this).next());

  console.log('prev', $(this).prev().get(0));
  console.log('next', $(this).next().get(0));
});

// Работа с css
const elem4 = $('.navigation__city');
elem4.click(function () {
  $(this).css({
    backgroundColor: 'red',
    'opacity': '0.5',
    border: '3px solid black',
    'margin-right': '10px',
  });
});

// Добавление удаление классов
headerSign.addClass('header__sign--active red');
headerSign.removeClass('header__sign--active');
headerSign.toggleClass('header__sign--active');
console.log('hasClass', headerSign.hasClass('red'));
console.log('.offset', headerSign.offset());
console.log('.offset top', headerSign.offset().top);
console.log('.offset left', Math.round(headerSign.offset().left));

const logo = $('.header__logo');
console.log('🚀 ~ logo:', logo.attr('alt'));
logo.attr('alt', 'Логотип компании дом построен');
logo.attr({
  src: 'img/favicon.svg',
  title: 'Дом построен',
  alt: 'Дом построен',
});
console.log('🚀 ~ logo:', logo.attr('alt'));

// jQuery EVENTS
headerSign.click(function() {
  $(this).tooggleClass('header__sign_active red');
});

headerSign.dblclick(function() {
  $(this).tooggleClass('red');
});

const modalOrder = $('.modal-order');
const modalBtn = $('.present__modal-order');
modalBtn.click(function () {
  modalOrder.show(500);
})

// Скрытие модального окна на крестик и по клику вне формы окна.
const modalCloseBtn = $('.modal-order__close');
const modalClose = () => {
    modalOrder.hide(500);
}
modalOrder.on('click', function({target}) {
  if (
    !$(target).closest('.modal-order__wrapper').length ||
    $(target).is('.modal-order__close, .modal-order__close svg, .modal-order__close svg path')
  ) {
    modalOrder.hide(500);
  }
//   if (!$(target).closest('.modal-order__wrapper').length ||
//   $(target).is('.modal-order__close') ||
//    $(target).closest('.modal-order__close').length) {
//   modalOrder.hide(500);
// }
  }
);

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function () {
  modalOrderTitle
  .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
});

modalOrderInput.blur(function () {
  modalOrderTitle
  .text('Заполните форму');
});

// modalOrderInput.keydown(function (e) {
// });
// modalOrderInput.keypress(function (e) {
// });
// modalOrderInput.keyup(function (e) {
// });
// modalOrderInput.on('input', function (e) {
// });
// modalOrderInput.on('change', function (e) {
// });
// modalOrder.mousedown(function (event) {
// })
// modalOrder.mouseup(function (event) {
// })
// modalOrder.mousemove(function (event) {
// })
// modalOrder.mouseover(function (event) {
// })
// modalOrder.mouseout(function (event) {
// })

// Animation
const foo = () => {
  $(this).next().slideUp();
  // $(this).next().slideDown();
  // $(this).next().slideToggle(1000);
  // $(this).next().fadeIn();
  // $(this).next().fadeOut();
  // $(this).next().fadeToggle();
  // $(this).next().fadeTo(1000, 0.5);
  $(this).next().animate({
    height: '-=50px',

  }, 100, function() {
    alert('Анимация закончилась');
  });
}
$('.what-buildiing__text').on('click', foo);

// Делегирование события
const modalOrderWrapper = $('.modal-order__wrapper');
modalOrder.on('mouseleave', '.modal-order__wrapper', foo);

// $('.what-buildiing__box').off('click', foo); // Убрать событие

// Создание элементов 
// const div = $(`<div class="hello-world">
// <h1 class="title">Привет мир2</h1>
// </div>
// `);
const div = $(`<div>`);
div.css('padding', '40px');
div.css('border', '3px solid black');
div.css('margin', '20px');
div.html(`
  <h2>Привет друзья</h2>
  `);
// div.text('Привет мир');
div.addClass('hello-world');
$('body').append(div);
$('.title').remove();
console.log(div.width(), div.height());
div.height('400px');

console.log(div.innerWidth(), div.innerHeight());

console.log(div.outerWidth(), div.outerHeight());
console.log(div.outerWidth(true), div.outerHeight(true));

// get / post
$('.modal-order__form').submit(function (event) {
  event.preventDefault();
  $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize())
  .then(function(data) {
    console.log(data);
    return data
  })
  .then(function(returnedData) {
    console.log(returnedData);
  })
  .catch(function(err) {
    console.log(err);
  })
})
//21.15
