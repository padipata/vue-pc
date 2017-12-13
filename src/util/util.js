'use strict';
// 接口地址
var conf = {
    // 测试环境
    // serverHost: 'http://test.inffur.com/api',
    // 开发环境
    serverHost: 'http://api.inffur.com/api'
};

module.exports = {
    // 网络请求
    request: function(param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            // dataType : 'jsonp',
            // jsonp    : 'callback',
            // jsonpCallback : 'callback',
            async: param.async || true,
            // data: JSON.stringify(param.data) || '',
            // crossDomain: true, //允许跨域，但不支持IE9及以下
            data: param.data || '',
            crossDomain: true == !(document.all), //允许跨域，不支持IE10，但支持IE9及以下
            beforeSend: function(XMLHttpRequest) {
                typeof param.beforeSend === 'function' && param.beforeSend(XMLHttpRequest);
            },
            complete: function(xhr, status){
                typeof param.complete === 'function' && param.complete(xhr, status);
            },
            success: function(res) {
                //请求成功
                if (200 === res.code) {
                    typeof param.success === 'function' && param.success(res.data, res.message);
                }
                // 401，token验证失败
                else if (401 === res.code) {
                    _util.loginout(); // 退出登录，cookie设置为空(跟清除一样)
                    // alert('会话已过期，请重新登录！')
                    _util.doLogin(); // 到登录页
                }
                //请求数据错误
                else if (200 !== res.code) {
                    typeof param.error === 'function' && param.error(res.message, res.code);
                }
            },
            error: function(err, code) {
                typeof param.error === 'function' && param.error(err.message, err.code);
            }
        });
    },
    // 获取服务器地址
    getServerUrl: function(path) {
        return conf.serverHost + path;
    },
    // 获取url参数
    getUrlParam: function(name) {
        var reg = RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        // substr(1)取？号后面的字符串
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    // 成功提示
    successTips: function(msg) {
        alert(msg || '操作成功!');
    },
    // 错误提示
    errorTips: function(msg) {
        console.log(msg || '出现错误，请联系管理人员~');
    },
    // 字段的验证，支持是否为空、手机、邮箱的判断
    validate: function(value, type) {
        var value = $.trim(value);
        //非空验证
        if ('require' === type) {
            return !!value;
        }
        //手机号验证
        if ('phone' === type) {
            return /^1\d{10}$/.test(value);
        }
        //邮箱验证
        if ('email' === type) {
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
        // 邮政编码
        if ('zipCode' === type) {
            return /^[a-zA-Z0-9 ]{3,12}$/.test(value);
        }
        // 银行卡号 // 这个只能简单判断银行卡格式 // 银行卡有可能是16位也有可能是19位
        if ('cardNum' === type) {
            return /^\d{16}|\d{19}$/.test(value);
        }
    },
    // 带回调的登录
    doLogin: function() {
        window.location.href = './user-login.html?redirect=' + encodeURIComponent(location.href);
    },
    // 跳转到主页
    goHome: function() {
        window.location.href = './index.html';
    },
    /**
     * [imagePrefix 图像有http或https开头，不加上七牛云链接]
     * @param  {[type]} url [URL]
     * @return {[type]}     [处理后的URL]
     */
    imagePrefix: function(imageUrl) {
        var rgExp = /^http:\/\/|^https:\/\//,
            // 七牛云URL
            bucketDomain = 'http://ot0ttrxbb.bkt.clouddn.com/';
        // 头像URL为http或https开头，不加上七牛云链接
        if (rgExp.test(imageUrl))
            return imageUrl;
        else
            return bucketDomain + imageUrl;
    },
    // 退出登录
    loginout: function() {
        _util.clearCookie('ydmf_token');
        _util.clearCookie('ydmf_user_id');
        _util.clearCookie('ydmf_username');
        _util.clearCookie('ydmf_mobile');
        _util.clearCookie('ydmf_money');
        _util.clearCookie('ydmf_avatar');
        _util.clearCookie('ydmf_email');
        _util.clearCookie('ydmf_gender');
        _util.clearCookie('ydmf_oauth_type');
        _util.clearCookie('ydmf_next_auto_login');
    },
    /**
     * [formatDate unix时间戳转换为x-x-x格式日期]
     * @param  {[Number]} timestamp [unix时间戳]
     * @return {[String]}           [x-x-x格式的日期]
     */
    formatDate: function(timestamp) {
        var date = new Date(timestamp * 1000);
        var y = date.getFullYear() + '-';
        var m = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) + '-' : (date.getMonth() + 1) + '-';
        var d = date.getDate();
        return y + m + d;
    },
    // 设置价钱的格式
    formatPrice: function(price) {
        return '￥ ' + price.toFixed(2);
    },
    /**
     * [replaceUrlParam 替换URL参数]
     * @param  {[String]} url [URL]
     * @param  {[String]} arg [要被替换的URL参数]
     * @param  {[都行]}   val [替换值]
     * @return {[String]}     [URL]
     */
    replaceUrlParam: function(url, arg, val) {
        var pattern = arg + '=([^&]*)';
        var replaceText = arg + '=' + val;
        return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[\?]') ? url + '&' + replaceText : url + '?' + replaceText);
    },
    /**
     * [deleteUrlParam 删除URL指定参数(包括？号和&号)]
     * @param  {[String]} url [URL]
     * @param  {[String]} ref [URL参数名]
     * @return {[String]}     [删除参数后的URL]
     */
    deleteUrlParam: function(url, ref) {
        var str = "";
        if (url.indexOf('?') != -1) {
            str = url.substr(url.indexOf('?') + 1);
        } else {
            return url;
        }
        var arr = "";
        var returnurl = "";
        var setparam = "";
        if (str.indexOf('&') != -1) {
            arr = str.split('&');
            for (var i in arr) {
                if (arr[i].split('=')[0] != ref) {
                    returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
                }
            }
            return url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
        } else {
            arr = str.split('=');
            if (arr[0] == ref) {
                return url.substr(0, url.indexOf('?'));
            } else {
                return url;
            }
        }
    },
    // 设置cookie
    setCookie: function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    // 获取cookie
    getCookie: function(name){
        var arr, reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return '';
    },
    // 删除cookie
    clearCookie: function(name) {
        this.setCookie(name, '', -1);
    }
};