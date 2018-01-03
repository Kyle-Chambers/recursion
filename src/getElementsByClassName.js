var getElementsByClassName = function (className){
  var result = [];

  (function lookForClassInThis(node) {
    var c = node.className || '';

    if (c.indexOf(className) > -1){
      result.push(node);
    }

    if (node.hasChildNodes()){
      node.childNodes.forEach(lookForClassInThis);
    }
  })(document.body);

  return result;
}
