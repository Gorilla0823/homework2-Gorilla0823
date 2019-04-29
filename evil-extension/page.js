const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  var result=[];
  //nodetype corresponds with Node.TEXT_NODE
  if(node.nodeType===3){
    //console.log(node.textContent);
    var word=node.textContent.split(' ');
    //console.log(word);
    for(var i=0;i<word.length;i++){
      for(var match in MATCH_LIST){
          let mword=MATCH_LIST[match];
        if(word[i] == match){
             word[i]=mword;
             break;
        }
      } 
      result+=word[i]+' ';
    }
    node.textContent=result;
  }
  else{
  var childs=node.childNodes;
  for(var i=0; i<childs.length; i++){
    if(childs[i].nodeName==='STYLE'||childs[i].nodeName==='SCRIPT'){
      continue;
      }
    transformTextNodes(childs[i]);
    }
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
