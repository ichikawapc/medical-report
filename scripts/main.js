function onSubmit(event) {
    alert("hello");
}

let button = document.getElementById("submit");
button.onclick = onSubmit;

function confirmFormC() {
}

function back() {
    return window.confirm("報告書作成を終了します、");
}