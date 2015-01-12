# PopUps

"Всплывающие окошки" на подложке и без

---

Примеры инициализации:

new PopUps();

new PopUps(params);

,где params - объект с параметрами

Параметры по-умолчанию:

 {
 
    // Селектор элемента, при клике на который показываем/скрываем popup
    popUpLink: '.js-popup-link',
    
    // Селектор элемента, при клике на который скрывать popup (на подложке)
    popUpClose: '.js-popup-close',
    
    // Селектор элемента, при клике на который скрывать popup (без подложки)
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
