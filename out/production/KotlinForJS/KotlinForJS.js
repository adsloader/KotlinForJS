if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinForJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinForJS'.");
}
var KotlinForJS = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toShort = Kotlin.toShort;
  function CallJS() {
    Test('\uCF54\uD2C0\uB9B0\uC5D0\uC11C JavaScript\uB97C \uD638\uCD9C\uD588\uC2B5\uB2C8\uB2E4.');
  }
  function createDIV() {
    var div = document.createElement('div');
    div.innerHTML = "<div id = 'createID' style = 'font-size:30pt;'><\/div>";
    div.textContent = '2.\uC0DD\uC131\uB41C div(createID)\uC785\uB2C8\uB2E4. ';
    ensureNotNull(document.body).appendChild(div);
  }
  var clickCount;
  function EventExample$lambda$lambda(this$) {
    return function (it) {
      this$.textContent = '3.Event \uC608\uC81C\uC785\uB2C8\uB2E4. - mouse over!!! ';
      this$.setAttribute('style', 'font-size: 20pt; color : #FF0000');
      return Unit;
    };
  }
  function EventExample$lambda$lambda_0(this$) {
    return function (it) {
      this$.textContent = '3.Event \uC608\uC81C\uC785\uB2C8\uB2E4. - mouse out!!! ';
      this$.setAttribute('style', 'font-size: 10pt; color : #333333');
      return Unit;
    };
  }
  function EventExample$lambda$lambda_1(this$) {
    return function (it) {
      var tmp$;
      this$.textContent = 'click!!! ' + (tmp$ = clickCount, clickCount = tmp$ + 1 | 0, tmp$);
      this$.setAttribute('style', 'font-size: 30pt; background-color : #333333; color:white');
      return Unit;
    };
  }
  function EventExample() {
    var title = '3.Event \uC608\uC81C\uC785\uB2C8\uB2E4.';
    var div = document.createElement('div');
    div.innerHTML = "<div id = 'eventtest' style = 'font-size:20pt;'><\/div>";
    div.textContent = title;
    div.addEventListener('mouseover', EventExample$lambda$lambda(div));
    div.addEventListener('mouseout', EventExample$lambda$lambda_0(div));
    div.addEventListener('click', EventExample$lambda$lambda_1(div));
    ensureNotNull(document.body).appendChild(div);
  }
  function httpRequestTest$lambda$lambda(closure$x, closure$doc) {
    return function (it) {
      if (closure$x.readyState === XMLHttpRequest.DONE) {
        if (closure$x.status === toShort(200)) {
          appendHTML(closure$doc.v, closure$x.responseText);
        }
      }
      return Unit;
    };
  }
  function httpRequestTest$lambda(closure$x, closure$doc) {
    return function (it) {
      closure$x.open('get', 'append.html');
      closure$x.onreadystatechange = httpRequestTest$lambda$lambda(closure$x, closure$doc);
      closure$x.send();
      return Unit;
    };
  }
  function httpRequestTest() {
    var x = new XMLHttpRequest();
    var doc = {v: document.getElementById('root')};
    if (doc.v == null) {
      println('null');
      return;
    }
    doc.v.innerHTML = '<b>HTTP \uAC00\uC838\uC624\uAE30 - clcik<\/b>';
    doc.v.addEventListener('click', httpRequestTest$lambda(x, doc));
  }
  function appendHTML(doc, str) {
    ensureNotNull(doc).innerHTML = ensureNotNull(doc).innerHTML + str;
  }
  function innerHTML() {
    var display = document.getElementById('display');
    var html = '\n<h1>1.Hello World<\/h1>\n\n    ';
    if (display == null) {
      println('null\uC785\uB2C8\uB2E4.!');
      return;
    }
    println('null \uC544\uB2D9\uB2C8\uB2E4.\n \n<h1>1.Hello World<\/h1>\n\n     ');
    display.innerHTML = html;
    display.setAttribute('style', 'font-size; 30pt; background-color:#FFFF00');
  }
  function main(args) {
    println('Hello browser');
    innerHTML();
    createDIV();
    CallJS();
    EventExample();
    httpRequestTest();
  }
  var package$basic = _.basic || (_.basic = {});
  package$basic.CallJS = CallJS;
  package$basic.createDIV = createDIV;
  Object.defineProperty(package$basic, 'clickCount', {
    get: function () {
      return clickCount;
    },
    set: function (value) {
      clickCount = value;
    }
  });
  package$basic.EventExample = EventExample;
  package$basic.httpRequestTest = httpRequestTest;
  package$basic.appendHTML_t9mn69$ = appendHTML;
  package$basic.innerHTML = innerHTML;
  _.main_kand9s$ = main;
  clickCount = 0;
  main([]);
  Kotlin.defineModule('KotlinForJS', _);
  return _;
}(typeof KotlinForJS === 'undefined' ? {} : KotlinForJS, kotlin);
