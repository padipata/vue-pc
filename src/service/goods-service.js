/*
 * @Author: liripeng
 * @Date:   2017-07-17 17:25:06
 * @Last Modified by: liripeng
 * @Last Modified time: 2017-09-15 18:11:49
 */

'use strict';

var _util = require('util/util.js');

var _goods = {
    // 删除购物车的商品
    delete_shop_cart_goods: function(data, beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShoppingCart/delete'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 购物车结算
    cart_charge: function(data, beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopPay/shoppingCartCharge'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 立即购买
    buy_now: function(data, beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopPay/productCharge'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 查询支付结果
    check_order: function(data, beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopPay/checkOrder'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 添加地址
    add_address: function(data, beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/UserArea/add'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 获取收获地址列表
    get_address: function(beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/UserArea/getList'),
            method: 'POST',
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 获取购物车数量
    get_shop_cart_count: function(beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShoppingCart/getCount'),
            method: 'POST',
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 获取购物车列表
    get_shop_cart_list: function(beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShoppingCart/getList'),
            method: 'POST',
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 根据商品ID获取其分类名称
    get_classify_By_Goods_id: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/shop_classify/getClassifyByProductId'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 点赞或取消点赞
    praise_or_cancel_praise: function(data, beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/shopEvaluate/praise'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 获取商品详情信息
    get_goods_detail: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/productInfo'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取供应商商品保障
    get_goods_security: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/afterSaleService'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 加入购物车
    add_shop_cart: function(data, beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShoppingCart/add'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 收藏商品
    collect_goods: function(data, beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/collect'),
            method: 'POST',
            data: data,
            beforeSend: beforeSend,
            success: resolve,
            error: reject
        });
    },
    // 获取商品规格
    get_goods_standard: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/standard'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取商品介绍信息
    get_goods_param: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/param'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取供应商中的历史事件
    get_historical_events: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/webSupplierBadRecord'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取供应商详情
    get_supplier_info: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/supplier'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取商品用户评价
    get_goods_evaluate: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopEvaluate/getList'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取商品一二级分类
    get_goods_classify_one_two: function(resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/shopClassify/webChild'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    // 获取商品二三分类
    get_goods_classify_two_three: function(data, resolve, reject, complete) {
        _util.request({
            url: _util.getServerUrl('/shopClassify/webChild'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取热门推荐
    get_hot_recommend: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/webPopular'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 获取热门商品
    get_hot_goods: function(resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/popular'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    // 获取品牌LOGO
    get_brand_logo: function(resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/shopIndex/supplierRecommend'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    // 商品搜索
    goods_search: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/searchWebByKeyword'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 根据一级分类ID获取相关品牌
    get_brand_by_one_classify_id: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/shopClassify/supplier'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 根据上级ID获取下级分类列表,不传classify_id 则返回一级分类列表
    get_child_by_parent_classify_id: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/shopClassify/getChild'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 商城首页商品推荐
    get_index_products_recommend: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/home'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject
        });
    },
    // 修改购物车商品数量
    set_count: function(data, beforeSend, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShoppingCart/setCount'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject,
            beforeSend: beforeSend
        });
    },
    // 获取商品规格列表
    getChangePriceRecord: function(data, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('/ShopIndex/changePriceRecord'),
            method: 'POST',
            data: data,
            success: resolve,
            error: reject,
        });
    },

}

module.exports = _goods;