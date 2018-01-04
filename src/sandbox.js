// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  // console.log('document.body', document.body);
  console.log(document.body.classList.value);
  console.log(document.body.classList);
  console.log(document.body.childNodes);
  // var element = document.body;
  // var values = Object.values(document.body.childNodes)
  // if (element.classList.value === className) {
  


  //  console.log(values.filter(function(item) {
  //  return item.classList.value === className;
  // }))
  // //   return true;
  // // }
  // return values.filter(function(item) {
  //  return item === className;
  // })

  // var matches = [];
  // var values = Object.values(document.body.childNodes);
  // // console.log(document.body.classList);
  // // console.log(document.body.childNodes);
  // console.log(values);
  // for (var i = 0; i < values.length; i++) {
  //  if (className === values[i].childNodes) {
  //    matches.push(values[i]);
  //  }
  // }
  // console.log(matches)
  // return matches;




  // return document.body.childNodes.filter(function(item) {
  //  return getElementsByClassName(item);
  // });
  // if (document.body.childNodes[0] === className) {
  //  matches.push(document.body.classList);
  // } 
  // document.body.childNode.slice(1);
  // return getElementsByClassName(className);

  // className.forEach(function(item){
  //  console.log(item.childNodes);
  //  console.log(item);
  // })
  // console.log();
};
