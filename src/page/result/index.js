/*
 * @Author: garychen 
 * @Date: 2017-08-09 00:53:18 
 * @Last Modified by:   garychen 
 * @Last Modified time: 2017-08-09 00:53:18 
 */
require('./index.css');
require('page/common/nav-simple/index.js');
var _cshop = require('util/cshop.js');

$(function(){
    var type        = _cshop.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    if(type === 'payment'){
        var orderNumber  = _cshop.getUrlParam('orderNumber'),
            $orderNumber = $element.find('.order-number');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
    }
    // 显示对应的提示元素
    $element.show();
})