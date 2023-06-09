const btn = document.getElementById('btn');
const text = document.getElementById('text');

// console.log(text.textContent);

btn.addEventListener('click', () => {
	text.textContent = 'ボタンをクリックしました';
	// console.log(text.textContent);
});
