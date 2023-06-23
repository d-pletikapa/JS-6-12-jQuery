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

