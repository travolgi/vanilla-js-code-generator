const leng = document.querySelector('#leng'),
		btnGenerate = document.querySelector('#generate'),
		btnReset = document.querySelector('#reset'),
		alertDiv = document.querySelector('.alert'),
		codeH1 = document.querySelector('#code');

btnGenerate.addEventListener('click', generateCode);
btnReset.addEventListener('click', () => {
	leng.value = '';
	codeH1.innerText = 'GeneratedCode';
});

function generateCode() {
	const verifyVal = leng.value === 0 || leng.value <= 0 || leng.value > 15;
	if(verifyVal) {
		alertDiv.classList.add('d-block');
		setTimeout(() => alertDiv.classList.remove('d-block'), 3000);
	} else {
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let code = '';
		for (let i=0; i < leng.value; i++) {
			code += alphabet[Math.floor(Math.random() * alphabet.length)];
		}
		codeH1.innerText = code;
	}
}

document.querySelector('#date').innerText = new Date().getFullYear();