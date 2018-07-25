$(document).ready(function() {
$('.store-button').on('click', function(event) {
	let titleValue = $('.input-title-field').val();
  let titleBox = $(`<div class="snippet-title">${titleValue}</div>`).delay(120000).fadeOut(3000);
	if (titleValue === "") {
    alert("Enter a valid file name");
    return false;
  }
  localStorage.setItem(`${titleValue}`, editor.getValue());
    titleBox.appendTo('.snippet-box');
});

$('.snippet-box').on('click', function() {
   let snippetTitle = $('.snippet-title').html();
   console.log(snippetTitle);
   let titleValue = $('.input-title-field').val();
   for (var x = 0; x < localStorage.length; x++) {
    if (snippetTitle === localStorage.key(x)) {
      var newCode = localStorage.getItem(`${localStorage.key(x)}`);
        editor.setValue(newCode);
      }
    }
});

$('.get-button').on('click', function(event) {
  let titleValue = $('.input-title-field').val();
  let titleBox = $(`<div class="snippet-title">${titleValue}</div>`).delay(120000).fadeOut(10000);

    for (var x = 0; x < localStorage.length; x++) {
    	if (titleValue === localStorage.key(x)) {
    		var newCode = localStorage.getItem(`${localStorage.key(x)}`);
    		editor.setValue(newCode);
    	} 
    }
    titleBox.appendTo('.snippet-box'); 
});

$('.delete-button').on('click', function(event) {
	let titleValue = $('.input-title-field').val();
  let snippetTitle = $('.snippet-box').html();
  let snippetsDiv = $('.snippet-box');
    let result = confirm("Are you sure you want to delete this code?");
    if (result) {
    for (var x = 0; x < localStorage.length; x++) {
      if (titleValue === localStorage.key(x)) {
        localStorage.removeItem(localStorage.key(x));
      } 
    }
  }
});

$('.run-button').on('click', function(event) {
  let code = editor.getValue();
  let titleValue = $('.input-title-field').val();
  let titleBox = $(`<div class="snippet-title">${titleValue}</div>`).delay(120000).fadeOut(3000);
  titleBox.appendTo('.snippet-box');
  console.log(eval(code));
});
});