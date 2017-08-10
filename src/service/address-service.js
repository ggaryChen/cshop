/*
 * @Author: garychen 
 * @Date: 2017-08-09 14:15:22 
 * @Last Modified by:   garychen 
 * @Last Modified time: 2017-08-09 14:15:22 
 */
var _cshop = require('util/cshop.js');

var _address = {
    // 获取地址列表
    getAddressList : function(resolve, reject){
        _cshop.request({
            url     : _cshop.getServerUrl('/shipping/list.do'),
            data    : {
                pageSize : 50
            },
            success : resolve,
            error   : reject
        });
    },
    // 新建收件人
    save : function(addressInfo, resolve, reject){
        _cshop.request({
            url     : _cshop.getServerUrl('/shipping/add.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 更新收件人
    update : function(addressInfo, resolve, reject){
        _cshop.request({
            url     : _cshop.getServerUrl('/shipping/update.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 删除收件人
    deleteAddress : function(shippingId, resolve, reject){
        _cshop.request({
            url     : _cshop.getServerUrl('/shipping/del.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取单条收件人信息
    getAddress : function(shippingId, resolve, reject){
        _cshop.request({
            url     : _cshop.getServerUrl('/shipping/select.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    },
}
module.exports = _address;