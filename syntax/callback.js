function a(){
  console.log('A');
}
a();

var a = function(){
  console.log('A');
}
a();

function slowfunc(callback){
  callback();
}
slowfunc(a);
/*
 callback slowfunc 함수의 인자인 callback은 callback의 내용을 실행한다.
 slowfunc(a)를 할 경우, slowfunc(callback) 함수의 callback에 a가 들어가게 되며,
 slowfunc 함수의 내용인 callback()을 통해 a()가 되며 내용을 출력한다. 'A'출력.
 */
