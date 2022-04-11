var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder,function(error,filelist){
  console.log(filelist);
});
/*우리가 개발한 프로그램은 루트에서 실행되므로, 루트를 기준으로 조사하는 디렉토리
경로는 './data'이다. './data'는 data로 써도 되지만 정확하게 하기 위해 './'를 추가.
파일 시스템을 다루는 fs에서 readdir를 사용하는데 지정한 디렉토리에 있는 파일 목록이
filelist 변수에 저장.
출력은 배열로 나오며, readdir는 출력을 배열로 준다. */
