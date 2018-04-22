const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.getElementById('name');
const button2 = document.getElementById('surname');
const input = document.getElementById('item');
const input2 = document.getElementById('item2');

button.addEventListener('click', function(){
	localStorage.setItem("name", "Smith");
	localStorage.setItem("surname", "John");
});