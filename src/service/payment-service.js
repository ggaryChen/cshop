/*
 * @Author: garychen 
 * @Date: 2017-08-09 00:49:54 
 * @Last Modified by: garychen
 * @Last Modified time: 2017-08-09 00:50:14
 */
var _cshop = require('util/cshop.js');

var _payment = {
    // 获取支付信息
    getPaymentInfo : function(orderNumber, resolve, reject){
        _cshop.request({
            url     : _cshop.getServerUrl('/order/pay.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取订单状态
    getPaymentStatus : function(orderNumber, resolve, reject){
        _cshop.request({
            url     : _cshop.getServerUrl('/order/query_order_pay_status.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _payment;