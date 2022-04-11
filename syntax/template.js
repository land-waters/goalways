/*var name = 'jisu';
var letter = 'Dear'+name+'
hello my name is '+ name + 'Nice to meet you ';
 엔터를 누르면 줄이 바뀐다. 그러므로 '도 역할이 이상해진다.
*/

/*var name = 'jisu';
var letter = 'Dear'+name+'\
\
hello my name is '+ name + 'Nice to meet you ';
console.log(letter);
이 문장은 오류가 나지 않지만, 내가 원하는 대로 뛰어쓰기가 되어있지 않다.
*/

/*var name = 'jisu';
var letter = 'Dear '+name+'\n\nhello my name is '+ name + 'Nice to meet you ';
console.log(letter);
줄바꿈은 \n으로 하면 된다. 하지만 이것도 좀 불편한 방법이다.
*/
var name = 'jisu';
var letter = `Dear ${name}


hello my name is  ${name} Nice to meet you` ;
console.log(letter);
/*위의 방법은 문자열 리터럴(literal)을 의미한다.
`(역따옴표 (~표))를 이용하면 엔터를 눌러도 인식이 되고 , 대신 변수의 이름은 ${name}처럼 써야한다.
그리고 + 표시 안해도 된다. */
