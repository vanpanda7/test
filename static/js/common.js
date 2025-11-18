// 获取url参数
function getUrlParams(key) {
    var url = window.location.search.substr(1);
    if (url == '') {
        return false;
    }
    var paramsArr = url.split("&")
    for (var i = 0; i < paramsArr.length; i++) {
        var combina = paramsArr[i].split("=");
        if (combina[0] == key) {
            return combina[1]
        }
    }
    return false;
}


/**
 * 表格时间格式化
 */
function formatDate(cellValue) {
    if (cellValue == null || cellValue == "") return "";
    var date = new Date(cellValue) 
    var year = date.getFullYear()
    var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() 
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() 
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() 
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
  }

// 日期格式化
function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
      return null
    }
    var format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      } else if (typeof time === 'string') {
        time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
      }
      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    var formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, function(result, key) {
      var value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
}
  

// 分享到新浪
function shareToSinaWeiBo(title, url, pic) {
    var param = {
        url: url,
        /*分享地址(可选)*/
        type: '3',
        count: '1',
        /** 是否显示分享数，1显示(可选)*/
        appkey: '',
        /** 您申请的应用appkey,显示分享来源(可选)*/
        title: title,
        /** 分享的文字内容(可选，默认为所在页面的title)*/
        pic: pic || '',
        /**分享图片的路径(可选)*/
        ralateUid: '',
        /**关联用户的UID，分享微博会@该用户(可选)*/
        rnd: new Date().valueOf()
    }
    var temp = [];
    for (var p in param) {
        temp.push(p + '=' + encodeURIComponent(param[p] || ''))
    }
    var targetUrl = 'http://service.weibo.com/share/share.php?' + temp.join('&');
    window.open(targetUrl, 'sinaweibo', 'height=800, width=800');
}

// 文件下载
function download(url, fileName) {
  console.log(url)
  var link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName ? fileName : 'file');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downLoadZip(str, filename) {
  var url =  str
  axios({
    method: 'get',
    url: url,
    responseType: 'blob',
  }).then(res => {
  })
}


/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
function handleTree(data, id, parentId, children) {
  let config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children'
  };

  var childrenListMap = {};
  var nodeIds = {};
  var tree = [];

  for (let d of data) {
    let parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (let d of data) {
    let parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (let t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (let c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
}

// var phoneTest = /^1[3-9][0-9]{9}$/
// var emailTest = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/