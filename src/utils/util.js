import $ from "zepto";

export function urlSearch () { // url参数
  var data, index;
  (function init () {
    data = [];
    index = {};
    // var u = window.location.search.substr(1);
    var u = window.location.href.split('?')[1];
    if (u != '') {
      var parms = decodeURIComponent(u).split('&');
      for (var i = 0, len = parms.length; i < len; i++) {
        if (parms[i] != '') {
          var p = parms[i].split("=");
          if (p.length == 1 || (p.length == 2 && p[1] == '')) { // p | p=
            data.push(['']);
            index[p[0]] = data.length - 1;
          } else if (typeof(p[0]) == 'undefined' || p[0] == '') { // =c | =
            data[0] = [p[1]];
          } else if (typeof(index[p[0]]) == 'undefined') { // c=aaa
            data.push([p[1]]);
            index[p[0]] = data.length - 1;
          } else { // c=aaa
            data[index[p[0]]].push(p[1]);
          }
        }
      }
    }
  })();
  return {
    // 获得参数,类似request.getParameter()
    parm: function (o) { // o: 参数名或者参数次序
      try {
        return (typeof(o) == 'number' ? data[o][0] : data[index[o]][0]);
      } catch (e) {
      }
    },
    //获得参数组, 类似request.getParameterValues()
    parmValues: function (o) { // o: 参数名或者参数次序
      try {
        return (typeof(o) == 'number' ? data[o] : data[index[o]]);
      } catch (e) {
      }
    },
    //是否含有parmName参数
    hasParm: function (parmName) {
      return typeof(parmName) == 'string' ? typeof(index[parmName]) != 'undefined' : false;
    },
    // 获得参数Map ,类似request.getParameterMap()
    parmMap: function () {
      var map = {};
      try {
        for (var p in index) {
          map[p] = data[index[p]];
        }
      } catch (e) {
      }
      return map;
    }
  }
}

export function getQueryString (name, url) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = url ? url.match(reg) : window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

export const storage = {
  get: function (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  set: function (key, value, callback) {
    localStorage.setItem(key, JSON.stringify(value))
    callback && callback()
  },
  remove: function (key, callback) {
    localStorage.removeItem(key)
    callback && callback()
  },
  clear: function (callback) {
    localStorage.clear()
    callback && callback()
  }
}

export function animation (...obj) {
  obj.forEach((item) => {
    $(item).show()
    setTimeout(function () {
      $(item).addClass('animated fadeInUp')
    }, 200)
  })
}

export const chinaNations = [{text: '汉族'}, {text: '壮族'}, {text: '满族'}, {text: '回族'}, {text: '苗族'}, {text: '维吾尔族'}, {text: '土家族'}, {text: '彝族'}, {text: '蒙古族'}, {text: '藏族'}, {text: '布依族'}, {text: '侗族'}, {text: '瑶族'}, {text: '朝鲜族'}, {text: '白族'}, {text: '哈尼族'}, {text: '哈萨克族'}, {text: '黎族'}, {text: '傣族'}, {text: '畲族'}, {text: '傈僳族'}, {text: '仡佬族'}, {text: '东乡族'}, {text: '高山族'}, {text: '拉祜族'}, {text: '水族'}, {text: '佤族'}, {text: '纳西族'}, {text: '羌族'}, {text: '土族'}, {text: '仫佬族'}, {text: '锡伯族'}, {text: '柯尔克孜族'}, {text: '达斡尔族'}, {text: '景颇族'}, {text: '毛南族'}, {text: '撒拉族'}, {text: '布朗族'}, {text: '塔吉克族'}, {text: '阿昌族'}, {text: '普米族'}, {text: '鄂温克族'}, {text: '怒族'}, {text: '京族'}, {text: '基诺族'}, {text: '德昂族'}, {text: '保安族'}, {text: '俄罗斯族'}, {text: '裕固族'}, {text: '乌兹别克族'}, {text: '门巴族'}, {text: '鄂伦春族'}, {text: '独龙族'}, {text: '塔塔尔族'}, {text: '赫哲族'}, {text: '珞巴族'}, {text: '穿青族'}, {text: '亻革家人'}]

export const regCollection = {
  nameReg: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,}$/,
  mobileReg: /^1[3456789]\d{9}$/,
  phoneReg: /^0\d{2,3}-?\d{7,8}$/,
  smsCodeReg: /^\d{6}$/,
  idCardReg: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/,
  emailReg: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  numberReg: /^[0-9]*$/,
  bankNumReg: /^\d{16,19}$/,
  blankReg: /\s/
}

export function isWeixin () {
  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('micromessenger') !== -1
}

// base64 转文件，未使用
export function dataURLtoFile (dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    suffix = mime.split('/')[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${suffix}`, {type: mime})
}
