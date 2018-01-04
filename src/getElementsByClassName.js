// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className) {
  var matches = [];
  function getMatchingElements(element) {
  	if (element.classList) {
			if (element.classList.value.indexOf(className) > -1) {
				matches.push(element);
			}
		}
  	if (!element.childNodes) {
  		return;
  	}
    return element.childNodes.forEach(function(item) {
    	return getMatchingElements(item)
    });
  }
  getMatchingElements(document.body)
  return matches;
};
