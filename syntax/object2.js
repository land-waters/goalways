// if 문 while 문과 다르게 함수는 값이여서 객체로 저장 가능
var f =function(){
  console.log(1+1);
  console.log(1+2);
}
// a 형태와 o 형태는 같은 방식이므로, 두가지중 하나 고르기.
var a = [f];
a[0]();

var o ={
  func:f
}
o.func();

/*
오류 발생.    (if 문과 while문은 값이 아니여서 변수에 저장 X)
var i = if(true) {console.log(1)};
var w = while(true) {console.log(1)};
*/
