# PopUps

На подложке и без

Примеры инициализации:

new PopUps();

new PopUps(params);

,где params - объект с параметрами

Параметры по-умолчанию:

 {
 
    // Селектор ссылки, при клике на которую показывать/скрывать popup
    popUpLink: '.js-popup-link',
    
    // Селектор Кнопки, при клике на которую скрывать popup (на подложке)
    popUpClose: '.js-popup-close',
    
    // Селектор Кнопки, при клике на которую скрывать popup (без подложки)
    popUpCloseSmall: '.js-popup-close-sm',
    
    // Селектор попапа (на подложке)
    popUp: '.js-popup',
    
    // Селектор контейнера внутри попапа (на подложке)
    popUpInner: '.js-popup-inner',
    
    // Селектор полупрозрачной подложки попапа (на подложке)
    popUpCover: '.js-popup-cover',
    
    // Селектор попапа (без подложки)
    popUpSmall: '.js-popup-sm',
    
    // Класс стилей для полупрозрачной подложки попапа (на подложке)
    classStylesShroudPopup: 'popups-shroud-popup'
    
  }
