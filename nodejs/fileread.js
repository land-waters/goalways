var fs = require('fs');
fs.readFile('sample.txt','utf8', function(err,data){
  console.log(data);
});
// 'utf8을 넣지 않을 경우 이상한 숫자가 나열된다. 그러므로 'utf8을 사용해야한다.'
