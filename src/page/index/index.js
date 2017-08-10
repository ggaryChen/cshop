/*
 * @Author: garychen 
 * @Date: 2017-08-06 15:05:38 
 * @Last Modified by: garychen
 * @Last Modified time: 2017-08-09 22:41:21
 */
require ('./index.css');
require ('page/common/nav/index.js');
require ('page/common/header/index.js');
require('util/slider/index.js');
var navSide         = require('page/common/nav-side/index.js');
var templateBanner  = require('./banner.string');
var _cshop             = require('util/cshop.js');

$(function() {
    // 渲染banner的html
    var bannerHtml  = _cshop.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true 
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});