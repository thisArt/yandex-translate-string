var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var requestJSON = new XMLHttpRequest();

module.exports = function(API_KEY) {
    String.prototype.toTranslate = function(lang, format) {
        var URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
        var KEY = API_KEY + "&";

        var lang = (lang === undefined) ? 'ru' : lang;
        var format = (format === undefined) ? 'plain' : format;

        requestJSON.open('GET', URL + 'text=' + encodeURIComponent(this) + '&' +
            'key=' + KEY + 'lang=' + lang + '&format=' + format + '/', false);
        requestJSON.send()

        if (requestJSON.status !== 200) {
            error = JSON.parse(requestJSON.responseText);
            return error.code + ": " + error.message;
        } else {
            getAnswer = JSON.parse(requestJSON.responseText);
            getAnswer = getAnswer.text.toString();
            return getAnswer;
        }
    };
    String.prototype.toDetect = function(hint, callback) {
        var URL = 'https://translate.yandex.net/api/v1.5/tr.json/detect?';
        var KEY = API_KEY + "&";

        var hint = '&hint=' + hint;
        var callback = '&callback=' + callback;
        var callback = (callback == '&callback=undefined') ? '' : callback;

        requestJSON.open('GET', URL + 'text=' + encodeURIComponent(this) + '&' +
            'key=' + KEY + hint + callback + '/', false);
        requestJSON.send()

        if (requestJSON.status !== 200) {
            errorArr = requestJSON.responseText.split('/');
            error = errorArr[1].toString().replace(/^[( \d]+|[) \d]+$/g, '');
            error = JSON.parse(error);
            return error.code + ": " + error.message;
        }
        if (callback === '') {
            getLang = JSON.parse(requestJSON.responseText);
            getLang = getLang.lang.toString();
            return getLang;
        } else {
            arr = requestJSON.responseText.split('/');
            getFunc = arr[0] + arr[1];
            return arr[0] + arr[1];
            //definition = JSON.parse(requestJSON.responseText);
        }
    };
    String.prototype.listTranslate = function(ui, callback) {
        var URL = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs?';
        var KEY = API_KEY + "&";

        var ui = '&ui=' + ui;
        var callback = '&callback=' + callback;
        var callback = (callback == '&callback=undefined') ? '' : callback;

        requestJSON.open('GET', URL + encodeURIComponent(this) + '&' +
            'key=' + KEY + ui + callback + '/', false);
        requestJSON.send()

        if (requestJSON.status !== 200) {
            errorArr = requestJSON.responseText.split('/');
            error = errorArr[1].toString().replace(/^[( \d]+|[) \d]+$/g, '');
            error = JSON.parse(error);
            return error.code + ": " + error.message;
        }
        if (callback === '') {
            getLang = requestJSON.responseText;
            return getLang;
        } else {
            arr = requestJSON.responseText.split('/');
            getFunc = arr[0] + arr[1];
            return arr[0] + arr[1];
            //definition = JSON.parse(requestJSON.responseText);
        }
    };
};