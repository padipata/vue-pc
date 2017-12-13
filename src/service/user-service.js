/*
 * @Author: liripeng
 * @Date:   2017-07-17 17:25:06
 * @Last Modified by: liripeng
 * @Last Modified time: 2017-09-26 09:53:23
 */

'use strict';

var _util = require('util/util.js');

var _user = {
    // 第三方登录
    oauthLogin: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/index/oauthLogin'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取QQ授权页面地址
    getQqCallbackUrl: function(callback_url, resolve, reject) {
        _util.request({
            url: 'http://api.inffur.com/api/index/qqWebLoginUrl',
            method: 'POST',
            data: callback_url,
            success: resolve,
            error: reject
        });
    },
    // QQ登录
    qqOauthLogin: function(data, resolve, reject) {
        _util.request({
            url: 'http://api.inffur.com/api/index/webQQOauthLogin',
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取微信授权页面地址
    getWechatCallbackUrl: function(callback_url, resolve, reject) {
        _util.request({
            url: 'http://api.inffur.com/api/index/wechatWebLoginUrl',
            method: 'POST',
            data: callback_url,
            success: resolve,
            error: reject
        });
    },
    // 微信登录
    wechatOauthLogin: function(data, resolve, reject) {
        _util.request({
            url: 'http://api.inffur.com/api/index/webOauthLogin',
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 退出登录
    loginOut: function(beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/index/logout'),
            method: 'POST',
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 登录
    login: function(userInfo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/index/login'),
            method: 'POST',
            data: userInfo,
            success: resolve,
            error: reject
        });
    },
    // 注册
    register: function(userInfo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/index/register'),
            method: 'POST',
            data: userInfo,
            success: resolve,
            error: reject
        });
    },
    // 获取验证码
    get_verification: function(userInfo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/sms/sendSms'),
            method: 'POST',
            data: userInfo,
            success: resolve,
            error: reject
        });
    },
    // 验证验证码
    confirm_verification: function(userInfo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/sms/validateCode'),
            method: 'POST',
            data: userInfo,
            success: resolve,
            error: reject
        });
    },
    // 重置密码
    reset_password: function(userInfo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/index/resetPassword'),
            method: 'POST',
            data: userInfo,
            success: resolve,
            error: reject
        });
    },
    // 获取用户赞、评论、收藏
    get_everything_sum: function(userInfo, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/shop_index/getEverythingSum'),
            method: 'POST',
            data: userInfo,
            success: resolve,
            error: reject
        });
    },
    // 获取用户名、ID、头像等
    get_name_avatar_id: function(beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/getUserInfo'),
            method: 'POST',
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 更换昵称
    update_username: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/changeUsername'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 验证密码
    validate_psw: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/validatePassword'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 更换密码
    update_psw: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/changePassword'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 更换头像
    change_avatar: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/changeAvatar'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取收货地址列表
    get_receive_address_list: function(beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/UserArea/getList'),
            method: 'POST',
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 获取我的收益记录
    getMyBenefit: function(beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/getMyBenefit'),
            method: 'POST',
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 获取我的收益记录明细
    getMyBenefitDetail: function(beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/getMyBenefitDetail'),
            method: 'POST',
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 获取我的订单列表-商城订单
    getMyOrders: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/shop_order/getMyOrders'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },

    // 获取我的订单列表-定制订单
    getMyCustomOrders: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/customizedOrder/getMyOrders'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },

    // 获取我的方案-推荐列表
    getMyWorksList: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/works/getMyWorksList'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },

    // 获取我的方案-设计方案
    getMySchemes: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/scheme/getMySchemes'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 删除我的方案-设计方案
    deleteMyScheme: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/scheme/deleteMyScheme'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },


    // 获取我的帖子
    getUserPostsList: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/forum/getMyArticleList'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 删除我的帖子
    deleteUserPost: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/forum/delOwnerArticle'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取我收藏的商品列表
    getMyProductCollections: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/getMyProductCollections'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取我收藏的案例列表
    getMyWorksCollections: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/works/getMyWorksCollections'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取我收藏的帖子列表
    getMyPostsCollections: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/forum/getMyArticleCollections'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取我的需求列表-我的发布
    getMyDemandList: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/getMyDemandList'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取我的承接列表
    getMyContributions: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/getMyContributions'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取我的活动列表
    getMyActivityCollections: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/activity/getMyList'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取高德行政区划分数据
    getAddrFromGaoDe: function(data, resolve, reject) {
        _util.requestGaoDe({
            url: 'http://restapi.amap.com/v3/config/district?',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 新增收货地址
    newAddress: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/UserArea/add'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 修改收货地址
    editAddress: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/UserArea/edit'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 提现到银行卡
    withdrawToBank: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/withdraw'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取历史提现记录
    getWithdrawHistory: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/getMyBenefitDetail'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 删除收货地址
    deleteReceiveAddr: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/UserArea/delete'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 申请成为设计师
    toBeDesigner: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/user/toBeDesigner'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取案例图片
    getSchemePic: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/scheme/getSchemePic'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 申请成为案例
    toBeProject: function(beforeSend, data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/works/toBeWorks'),
            method: 'POST',
            beforeSend: beforeSend,
            data: data,
            success: resolve,
            error: reject
        });
    }

}

module.exports = _user;