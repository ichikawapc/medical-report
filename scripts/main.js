// let button = document.getElementById("submit");
// button.onclick = onSubmit;

function confirmFormC() {
    confirmId.innerText = id.value;
}

let id = document.getElementById("id");
let confirmId = document.getElementById("confirmId");

// 戻るボタンの操作
function back() {
    window.location.href = "carotid.html";
}

// 終了ボタンの操作
function fin() {
    if (window.confirm("報告書作成を終了します。")) {
        // index.htmlへ戻る
        window.location.href = "index.html";
    } else {
        // 現ページへ留まる(何もしない)
    }
}

document.getElementById("id").textContent = id;