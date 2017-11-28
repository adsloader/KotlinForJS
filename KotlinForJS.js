if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinForJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinForJS'.");
}
var KotlinForJS = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  var throwNPE = Kotlin.throwNPE;
  function main(args) {
    println('Hello browser');
    innerHTML();
    createDIV();
    CallJS();
  }
  function CallJS() {
    Test('HIHIHI');
  }
  var clickCount;
  function createDIV$lambda$lambda(this$) {
    return function (it) {
      this$.innerHTML = 'click!';
      return Unit;
    };
  }
  function createDIV$lambda$lambda_0(this$) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = clickCount, clickCount = tmp$ + 1 | 0, tmp$);
      this$.textContent = 'clicked!!! ' + toString(tmp$_0);
      return Unit;
    };
  }
  function createDIV() {
    var tmp$;
    var display = document.getElementById('display');
    if (display == null) {
      println('null\uC785\uB2C8\uB2E4.!');
      return;
    }
    display.innerHTML = '<h1>Hi! click me!<\/h1>';
    display.addEventListener('click', createDIV$lambda$lambda(display));
    println('null \uC544\uB2D9\uB2C8\uB2E4.\n ');
    var div = document.createElement('div');
    div.innerHTML = "<div id = 'aaa' style = 'font-size:20pt;'><\/div>";
    div.textContent = 'Hi';
    div.addEventListener('click', createDIV$lambda$lambda_0(div));
    ((tmp$ = document.body) != null ? tmp$ : throwNPE()).appendChild(div);
  }
  function innerHTML() {
    var display = document.getElementById('display');
    var html = '\n<h1>Hello World<\/h1>\n\n    ';
    if (display == null) {
      println('null\uC785\uB2C8\uB2E4.!');
      return;
    }
    println('null \uC544\uB2D9\uB2C8\uB2E4.\n \n<h1>Hello World<\/h1>\n\n     ');
    display.innerHTML = html;
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
  package$basic.createDIV = createDIV;
  package$basic.innerHTML = innerHTML;
  clickCount = 0;
  main([]);
  Kotlin.defineModule('KotlinForJS', _);
  return _;
}(typeof KotlinForJS === 'undefined' ? {} : KotlinForJS, kotlin);
