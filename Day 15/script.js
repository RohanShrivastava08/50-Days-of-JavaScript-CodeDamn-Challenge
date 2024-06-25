// Write JavaScript code to bind click event on the setStorage and getStorage buttons

document.getElementById('setStorage').addEventListener('click', function () {
	const value = document.getElementById('storageKey').value
	localStorage.setItem('myKey', value)
})

document.getElementById('getStorage').addEventListener('click', function () {
	const value = localStorage.getItem('myKey')
	document.getElementById('output').textContent = value
})
