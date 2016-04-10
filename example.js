var toTranslate = require("./index")("trnsl.1.1.20160405T172705Z.2b9ee9b40217e0f3.46c584ae213c8792abcb2b2570af421f0af8f405");
/** Пример перевода файла, входные параметры :
 * @param {string}
 * "string".toTranslate(lang, format)
 *
 * format  Возможные значения:
 * 	plain — текст без разметки (значение по умолчанию); 
 *	html — текст в формате HTML.
 *	
 * lang	 Направление перевода:
 *	 Может задаваться одним из следующих способов:
 *	В виде пары кодов языков («с какого»-«на какой»), разделенных дефисом. Например, en-ru обозначает перевод с английского на русский.
 *	В виде кода конечного языка (например ru). В этом случае сервис пытается определить исходный язык автоматически.
 */
console.log('Пример перевода на английский!'.toTranslate('en', 'plain'));
/** Пример файла формата JSONP, входные параметры :
 * @param {string}
 * "string".toDetect(hint, callback)
 *
 *	hint	
 *		Список наиболее вероятных языков (им будет отдаваться предпочтение при определении языка текста). Разделитель списка - запятая.
 *	callback	
 *	Имя функции обратного вызова. 
 *		Используется в том случае, когда необходимо получить JSONP-ответ.
 */
console.log('text to translate is.'.toDetect('ru, en', 'getCodeJSONP'));
// Пример записи файла формата JSONP:
/*saveFile.writeFile("getCodeJSONP.json", codeJSONP, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Файл сохранен.");
    }
});*/
var list = ''.listTranslate('ru','').replace(/^[( \d]+|[) \d]+$/g, '');
// var listLangs = JSON.parse(list);
console.log(list)