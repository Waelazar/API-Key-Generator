// if you want to try a new one by yourself those could help you :

// var d = new Date(); to Generate a new Date 
// var t = d.valueOf(); to get value of numbers only
// var m = Math.random(t); to schuffle them

// the Code 
function guid() {
function S4() {
	//The toString() method converts a number to a string. i used 16 because that will show as an hexadecimal value
	//The substr() method extracts parts of a string substr(start, length), i used only the start (1)
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
return (S4() + S4() + "-" + S4() + "-4" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//to save the 
var Generator = document.getElementById('button1');
var input = document.getElementById('input');
// use onclick attribute, that allows you to generate a new API key everytime you click the button 
// not only one Time 
Generator.onclick = function event() {
 return  input.value  = guid();
}

// copy the API key button 
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).val()).select();
  document.execCommand("copy");
  $temp.remove();
}