//連結Button 監聽click 
//隨機產生a-f 0-9 的3位數字
//講數字結構排程 #f2d4a7;
//將資料渲染至頁面背景顏色 並在colorValue中顯示當前數字的數值

//values
const btn = document.getElementById("randomColor");
let currentColor = "#b2b";
const colorValue = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];


//function build
function getNum(){
    return Math.floor(Math.random()*colorValue.length)
}
function getFullnum(n){
    let result = "#"
    for (let index = 0; index < n; index++) {
        result = result + colorValue[getNum()].toString()
    }
    return result;
}


//function do
btn.addEventListener("click", function(){
    currentColor = getFullnum(3);
    document.body.style.backgroundColor = currentColor;
    document.getElementById("colorValue").innerText = "hex` " + currentColor;
});

