// キャンバス(描画エリアの取得)
const canvas = document.querySelector("#drawing-area");
// 2dコンテキスト(描画ツールの取得)
const ctx = canvas.getContext("2d");
// 消去ボタン
const clearBtn = document.querySelector("#clear-button");

// 線の太さの表示欄
const widthDisplay = document.querySelector("#width-display");
// 線の太さを決めるスライダー
const slider = document.querySelector("#slider");
// 線の色を決めるカラーピッカー
const colorPicker = document.querySelector("#color-picker");

// 描画開始点　横の位置
let x;
// 描画開始点　縦の位置
let y;
// マウスボタンが押されているかどうか(trueまたはfalse)
let mousePressed = false;

// 線の太さ
let width = slider.value;
// 線の色
let color = colorPicker.value;

// キャンバスにmousedownイベントを追加
canvas.addEventListener("mousedown", startDrawing);

// 描画を開始する
function startDrawing(e) {
    // マウスボタンが押されていることを示す
    mousePressed = true;

    // 押下された位置を取得する
    x = e.offsetX;
    y = e.offsetY;
}

// キャンバスにmousemoveイベントを追加
canvas.addEventListener("mousemove", draw);

// 線を描画する
function draw(e) {
    // マウスボタンを押していないときは描画しない
    if (!mousePressed) return;

    // *** 描画する処理 ***
    // 移動先の座標を取得する
    x2 = e.offsetX;
    y2 = e.offsetY;

    // 線の太さを指定
    ctx.lineWidth = width;
    // 線の色を指定
    ctx.strokeStyle = color;

    // 線の端の形を指定
    ctx.lineCap = "round";

    // 線を描画する
    ctx.beginPath();    //描画開始
    ctx.moveTo(x, y);   //開始点
    ctx.lineTo(x2, y2); //移動先
    ctx.stroke();       //線を引く

    // 開始点の座標を更新する
    x = x2;
    y = y2;
}

// スライダーにinputイベントを追加
slider.addEventListener("input", function () {
    // 線の太さをスライダーの値にする
    width = this.value;

    // 太さの表示をスライダーの値にする
    widthDisplay.textContent = this.value;
});

// カラーピッカーにinputイベントを追加
colorPicker.addEventListener("input", function () {
    // 線の色をカラーピッカーの値にする
    color = this.value;
});

// ウインドウにmouseupイベントを追加
window.addEventListener("mouseup", () => mousePressed = false);

// 消去ボタンにclickイベントを追加
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
});