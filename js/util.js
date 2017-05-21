
var targetUrl = "http://192.168.1.104:9000";
function logout(){
    localStorage.removeItem('username');
    location.href='../index.html'
}
function zhget(url, data, callback) {
    return zhajax(url, data, 'GET', callback);
}

function zhpost(url, data, callback) {
    return zhajax(url, data, 'POST', callback);
}

function zhput(url, data, callback) {
    return zhajax(url, data, 'PUT', callback);
}

function zhdelete(url, data, callback) {
    return zhajax(url, data, 'DELETE', callback);
}

function zhajax(url, data, type) {
    if(type=='GET'){
        return $.ajax({
            url: targetUrl + url,
            // data: $.extend(data, {sid: getCookie('sid')}),
            data: data,
            type: type
        });
    }else{
        return $.ajax({
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: targetUrl + url,
            data: JSON.stringify($.extend(data, {sid: getCookie('sid')})),
            // data: data,
            type: type
        });
    }
}

function ajaxSynGet(url, callback) {   //同步GET请求
    $.ajax({
        url: url,
        data: {},
        async: false,
        type: 'GET',
        success: function (result, textStatus, jqXHR) {
            if (callback) {
                callback(result);
            }
        }
    });
}

function ajaxInitSession(url, callback) {   //专用于session初始调用
    $.ajax({
        url: targetUrl + url,
        data: {sid: getCookie('sid')},
        type: 'POST',
        success: function (result, textStatus, jqXHR) {
            if (callback) {
                callback(result);
            }
        }
    });
}

function upajax(url, data, callback) {
    return $.ajax({
        url: targetUrl + url,
        data: data,
        type: 'POST',
        processData: false,        //必须false才会避开jQuery对 formdata 的默认处理;XMLHttpRequest会对 formdata 进行正确的处理
        contentType: false,        //必须false才会自动加上正确的Content-Type
        success: function (result, textStatus, jqXHR) {
            if (callback) {
                callback(result);
            }
        }
    });
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}


function showSuccess(message) {
    Messenger().post({
        message: message,
        type: 'success',
        hideAfter: 1.5,//多长时间消失
        showCloseButton: true
    });
}

function showError(message) {
    Messenger().post({
        message: message,
        type: 'error',
        hideAfter: 1.5,//多长时间消失
        showCloseButton: true
    });
}


function buildTable(datas, template, placeholder) {
    var temp = Handlebars.compile($("#" + template).html());
    $("#" + placeholder).html(temp({
        datas: datas.rows
    }));
    if (datas.count > 0) {
        buildPaginator('paginator', datas.count);
    }
}

function buildPaginator(paginator, total) {
    var options = {
        currentPage: currentPageNo,
        totalPages: total,
        bootstrapMajorVersion: 3,
        onPageClicked: function (e, originalEvent, type, page) {
            currentPageNo = page;
            queryList();
        }
    };
    $('#' + paginator).bootstrapPaginator(options);
}

function templateRender(data, id) {
    var temp = Handlebars.compile($("#" + id).html());
    $("#" + id).html(temp(data));

}
function buildTableNoPage(datas, templateId, placeholder) {
    var temp = template(templateId,datas);
    $("#" + placeholder).html(temp);

}