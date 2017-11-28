if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinForJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinForJS'.");
}
var KotlinForJS = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var throwNPE = Kotlin.throwNPE;
  function main(args) {
    println('Hello browser');
    innerHTML();
    createDIV();
    CallJS();
    EventExample();
  }
  function CallJS() {
    Test('\uCF54\uD2C0\uB9B0\uC5D0\uC11C JavaScript\uB97C \uD638\uCD9C\uD588\uC2B5\uB2C8\uB2E4.');
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
    var tmp$;
    var title = '3.Event \uC608\uC81C\uC785\uB2C8\uB2E4.';
    var div = document.createElement('div');
    div.innerHTML = "<div id = 'eventtest' style = 'font-size:20pt;'><\/div>";
    div.textContent = title;
    div.addEventListener('mouseover', EventExample$lambda$lambda(div));
    div.addEventListener('mouseout', EventExample$lambda$lambda_0(div));
    div.addEventListener('click', EventExample$lambda$lambda_1(div));
    ((tmp$ = document.body) != null ? tmp$ : throwNPE()).appendChild(div);
  }
  function createDIV() {
    var tmp$;
    var div = document.createElement('div');
    div.innerHTML = "<div id = 'createID' style = 'font-size:30pt;'><\/div>";
    div.textContent = '2.\uC0DD\uC131\uB41C div(createID)\uC785\uB2C8\uB2E4. ';
    ((tmp$ = document.body) != null ? tmp$ : throwNPE()).appendChild(div);
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
  _.main_kand9s$ = main;
  var package$basic = _.basic || (_.basic = {});
  package$basic.CallJS = CallJS;
  Object.defineProperty(package$basic, 'clickCount', {
    get: function () {
      return clickCount;
    },
    set: function (value) {
      clickCount = value;
    }
  });
  package$basic.EventExample = EventExample;
  package$basic.createDIV = createDIV;
  package$basic.innerHTML = innerHTML;
  clickCount = 0;
  main([]);
  Kotlin.defineModule('KotlinForJS', _);
  return _;
}(typeof KotlinForJS === 'undefined' ? {} : KotlinForJS, kotlin);
