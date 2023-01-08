//Numeric Amount
const min = document.getElementById('min'),
num = document.getElementById('num'),
plus = document.getElementById('plus');
let amount = 1;
plus.addEventListener('click', ()=>{
	amount++;
	amount = (amount > 10) ? amount:amount;
	num.innerText = amount;
});
min.addEventListener('click', ()=>{
	if(amount > 1){
		amount--;
		amount = (amount < 1) ? amount:amount;
		num.innerText = amount;
	}
});
//Choosed Number
const btn = document.getElementById('choose-num');
let choosedNum = document.getElementById('choosed-num');
btn.addEventListener('click', ()=>{
	choosedNum.innerText = amount;
});
//Generate Random Number
function generateNumber(){
	const result = document.getElementById('num-result');
	let char = "0123456789";
	let numLength = amount, i, randomNum;
	let rslt = "";
	for(i = 0; i < numLength; i++){
		randomNum = Math.floor(Math.random() * char.length);
		rslt += char.substring(randomNum, randomNum+1);
	}
	result.value = rslt;
}
function copyText(){
	const result = document.getElementById('num-result');
	result.select();
	result.setSelectionRange(0, 999999);
	navigator.clipboard.writeText(result.value);
}