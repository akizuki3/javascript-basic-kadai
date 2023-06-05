// 1~100の範囲で整数を作成
let num = Math.floor(Math.random() * 100) + 1;

if (num % 15 === 0) {
	console.log(num + 'は3と5の倍数です');
}
else if (num % 3 === 0) {
	console.log(num + 'は3の倍数です');
}
else if (num % 5 === 0) {
	console.log(num + 'は5の倍数です');
}
else {
	console.log(num + 'は3の倍数でも5の倍数でもありません');
}
