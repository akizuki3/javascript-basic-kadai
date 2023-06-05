// 課題：四則演算をしよう

const weight = 68;
const height = 1.7;

const bmi = weight / (height * height);
console.log(bmi);



// 文字連結と四捨五入の練習

var bmiRounding = bmi;
bmiRounding = bmiRounding * 10;
bmiRounding = Math.round(bmiRounding);
bmiRounding = bmiRounding / 10;
console.log('体重' + weight + 'kg、身長' + height + 'mの人のbmiは' + bmiRounding + 'です。');