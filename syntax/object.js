var members = ['egoing','k8805','hoya'];

var roles = {
  'programmer':'egoging',
  'designer':'k8805',
  'manager':'hoya'
}

var i =0;
while(i < members.length){
  console.log(members[i]);
  i = i + 1;
}

for(var name in roles){
  console.log('object => ',name , 'value => ',roles[name]);
}
