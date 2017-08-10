/*
 * @Author: garychen 
 * @Date: 2017-08-08 13:27:33 
 * @Last Modified by: garychen
 * @Last Modified time: 2017-08-08 13:28:45
 */
var _cshop = require('util/cshop.js');

var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _cshop.request({
            url     : _cshop.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _cshop.request({
            url     : _cshop.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _product;