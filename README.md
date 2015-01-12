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
  
  Примеры шаблонов:
  
  Элемент, при клике на который показываем попап:
  
    <span class="ny-pseudo-select ny-pseudo-select_datepicker js-popup-link" data-popup-align="left" data-popup="ny-dropdown-afisha-datepicker" data-popup-type="small" tabindex="0">
      <span class="ny-pseudo-select__content">Календарь</span>
    </span>
 
 
 Указаны параметры: 
 
 data-popup-align="left"
 
    Означает что попап будет выровнен по левому краю относительно вызвавшего его элемента
    Если данный параметр не указать или указать другое значение, тогда выравнивание будет по центру 
   
 data-popup="ny-dropdown-afisha-datepicker"
 
    Указываем id элемента попапа, который вызываем 
   
 data-popup-type="small"
 
    Указываем тип попапа, в данном случае попап без подложки
    Если тип не указан или указано другое значение будет вызван попап с подложкой
   
   
 Попап без подложки:
   
    <div class="ny-select-dropdown ny-select-dropdown_datepicker js-popup-sm" id="ny-dropdown-afisha-datepicker" style="display: none;">
      контент попапа
    </div>
    
   Можно разместить по коду сразу следом за элементом элемента, его вызывающего
   При инициализации попап переместится вниз страницы
   

Попап на подложке:

 
