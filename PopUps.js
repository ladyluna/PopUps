if (!window.PopUps) {

var PopUps = (function() {

'use strict';

/**
 * PopUps
 *
 * @author Natalia Uvarova
 * @version 2.1.0
 * @year 2013
 */

/**
 * @constructor PopUps
 *
 * @param {Object} params параметры
 */
var PopUps = function(params) {

    this.init(params);
};

PopUps.prototype = {

    _config: {

        popUpLink: '.js-popup-link',
        popUpClose: '.js-popup-close',
        popUpCloseSmall: '.js-popup-close-sm',
        popUp: '.js-popup',
        popUpInner: '.js-popup-inner',
        popUpCover: '.js-popup-cover',
        popUpSmall: '.js-popup-sm',
        classStylesShroudPopup: 'popups-shroud-popup'
    },

    /**
     * @method init
     *
     * @param {Object} params параметры
     */
    init: function(params) {

        var that = this;

        that._config = $.extend({}, that._config, params);

        that.popupLink = $(that._config.popUpLink);
        that.popupClose = $(that._config.popUpClose);
        that.popupCloseSmall = $(that._config.popUpCloseSmall);
        that.popup = $(that._config.popUp);
        that.popupSmall = $(that._config.popUpSmall);

        that.binding(); 
    },

    /**
     * @method binding
     */
    binding: function() {

        var that = this;

        that.popupLink.on('click', function(event) {

            that.showPopUp($(this));
            event.preventDefault();
        });
        
        that.popupClose.on('click', function(event) {

            that.hidePopUp();
            event.preventDefault();
        });

        that.popupCloseSmall.on('click', function(event) {

            that.hidePopUpSmall();
            event.preventDefault();
        });

        $('body').on('click', function(event) {

            if ($(event.target).closest(that._config.popUpInner).length || $(event.target).closest(that._config.popUpSmall).length || $(event.target).closest(that._config.popUpLink).length) {

                return;
                
            } else {

                that.hidePopUpSmall();
                that.hidePopUp();
            }
            
        });

        var resizeWindow = false;

        $(window).resize(function() {

            if (resizeWindow) {
                clearTimeout(resizeWindow);
                resizeWindow = false;
            }

            resizeWindow = setTimeout(function() {

                that.hidePopUpSmall();  
            }, 80);

        });

        return that;
    },

    /**
     * Показать попап
     *
     * @method showPopUp
     *
     * @param {jQuery Object} elem элемент при клике на который показываем попап
     */
    showPopUp: function(elem) {

        var that = this,
            popup = $('#' + elem.data('popup')),
            cover = $(that._config.popUpCover),
            scrollBarWidth;

        if (elem.data('popupType') && (elem.data('popupType') === 'small')) {
        /* попапы без подложки */

            if (popup.css('display') != 'none') {

                that.hidePopUpSmall(popup);

            } else {

                that.hidePopUpSmall();

                popup.appendTo('body');

                popup.css('top', Math.ceil(elem.offset().top) + elem.outerHeight() + 'px');

                if (elem.data('popupAlign') && (elem.data('popupAlign') == 'left')) {

                    popup.css('left', Math.ceil(elem.offset().left) + 'px');

                } else {
                    popup.css('left', Math.ceil(elem.offset().left) - Math.ceil(popup.outerWidth()/2) + Math.ceil(elem.outerWidth()/2) + 'px');
                }

                popup.show();
                
            }

        } else {
        /* попапы на подложке */

            if (!cover.length) {

                cover = $('<div class="' + that._config.classStylesShroudPopup + 
                        ' js-popup-cover" style="display: none;"></div>');
                cover.appendTo('body');
            } 

            if (popup.css('display') != 'none') {

                that.hidePopUp(popup, cover);
                
            } else {

                that.hidePopUpSmall();

                popup.appendTo('body');

                popup.show();
                cover.show();

                scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
                
                if (!scrollBarWidth || (scrollBarWidth <= 0)) {
                    scrollBarWidth = 17;
                }
                
                $('html').css({'overflow': 'hidden', 'margin-right': scrollBarWidth + 'px'});
            }

        }

    },

    /**
     * Скрыть попап (с подложкой)
     *
     * @method hidePopUp
     *
     * @param {jQuery Object} popup попап
     * @param {jQuery Object} cover подложка
     */
    hidePopUp: function(popup, cover) {

        var that = this;

        popup = popup || that.popup;
        cover = cover || $(that._config.popUpCover);

        if (popup.is(':visible')) {
            popup.hide();
            cover.hide();
            $('html').css({'overflow': '', 'margin-right': ''});
        }

        return that;
    },

    /**
     * Скрыть попап (без подложки)
     *
     * @method hidePopUpSmall
     *
     * @param {jQuery Object} popup
     */
    hidePopUpSmall: function(popup) {

        var that = this;

        popup = popup || that.popupSmall;

        if (popup.is(':visible')) {
            popup.hide();
        }
        
        return that;
    }

};

return PopUps;

})();

}