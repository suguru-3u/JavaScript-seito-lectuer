// 変数
let unko = 'Hello Word';
console.log(unko);

// 定数
const bigUnko= 'He..Hell Hello Word';
console.log(bigUnko);

// 配列
let inoki = ['イーチ','ni-','さーん'];
console.log(inoki[1]);

// ループ
let index = 0;
while(index < 3){
    // 繰り返す命令
    console.log(inoki[index]);
    index++;
}

//関数
const test = (arg) => {
    // 条件分岐
    if(inoki.length >= arg){
        console.log('梵唄家！');
    }else{
        console.log('No梵唄家！');
    }
};

// 引数
test(1);

// オブジェクト
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToilet: () => {
        console.log('Toilet!!!!!')
    }
}
console.log(unko2);
console.log(unko2.goToilet());

// windouw
console.log(window.innerWidth);    
window.alert('Hello');

// document
console.log(document);
console.log(document.getElementsByTagName('button'));
