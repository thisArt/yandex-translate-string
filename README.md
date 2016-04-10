# yandex-translate-string

The NPM module for work with [Yandex.Translate API](https://tech.yandex.ru/translate/) 

Для работы модуля требуется библиотека ```XMLHttpRequest``` 

Самое простое применение модуля:

```javascript
var toTranslate = require("./index")(API_KEY); // "API_KEY" - ключь API для работы с Яндекс.Переводчиком.
console.log('Пример перевода на английский!'.toTranslate('en', 'plain')); // Example of translation in English!

console.log('Пример получения файла формата JSONP'.toDetect('ru, en', 'getCodeJSONP')); // вывод:
                                                                                        // getCodeJSONP({"code":200,"lang":"ru"})

var list = ''.listTranslate('ru','').replace(/^[( \d]+|[) \d]+$/g, ''); 
console.log(list); // JSON формат

var list = ''.listTranslate('ru','getJSONP');
console.log(list) // JSONP формат
```
