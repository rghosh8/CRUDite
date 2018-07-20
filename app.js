$(document).ready(function() {
console.log('+++ filename: app.js: jquery.ready exoected no error actual: ', $ );

//attach event listener to buttons(input)
//create function stub for read/write/delete
$('.store-button').on('click', function(event) {
	// event.preventDefault();
	// event.stopPropagation(); //stops event from leaking into other listeners
	// console.log(event.target.classList);
	let titleValue = $('.input-title-field').val();
    let codeValue = $('.input-code-field').val();

	localStorage.setItem('titleValue', titleValue);
	localStorage.setItem('codeValue', codeValue);

    
});

$('.get-button').on('click', function(event) {
	// localStorage.getItem('booya');
	let titleValue = localStorage.getItem('titleValue');
	let codeValue = localStorage.getItem('codeValue'); //booya is the property
	$('.debug').html(`<p>${titleValue} ${codeValue}</p>`);
});

$('.delete-button').on('click', function(event) {
	console.log(localStorage.removeItem('booya')); //deletes given property
});

});