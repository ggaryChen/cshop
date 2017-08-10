/*
 * @Author: garychen 
 * @Date: 2017-08-08 11:35:54 
 * @Last Modified by: garychen
 * @Last Modified time: 2017-08-08 11:47:51
 */
require('./index.css')
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _cshop             = require('util/cshop.js');
var _user           = require('service/user-service.js');
var templateIndex   = require('./index.string');

// page 逻辑部分
var page = {
    init: function(){
        this.onLoad();
    },
    onLoad : function(){
        // 初始化左侧菜单
        navSide.init({
            name: 'user-center'
        });
        // 加载用户信息
        this.loadUserInfo();
    },
    // 加载用户信息
    loadUserInfo : function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _cshop.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function(errMsg){
            _cshop.errorTips(errMsg);
        });
    }
};
$(function(){
    page.init();
});