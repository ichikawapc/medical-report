function confirmFormC() {
    outputDate.innerText = inputDate.value;
    if (inputDepartment.value == "outpatient") {
        outputDepartment.innerText = "外来";
    } else if (inputDepartment.value == "2F") {
        outputDepartment.innerText = "2F";
    } else if (inputDepartment.value == "3F") {
        outputDepartment.innerText = "3F";
    } else if (inputDepartment.value == "5F") {
        outputDepartment.innerText = "5F";
    } else {
        outputDepartment.innerText = "";
    }
    outputId.innerText = inputId.value;
    outputName.innerText = inputName.value + "　殿";
    if (inputSex.value == "male") {
        outputSex.innerText = "男性";
    } else if (inputSex.value == "female") {
        outputSex.innerText = "女性";
    } else {
        outputSex.innerText = "";
    }
    outputBD.innerText = inputBD.value;
}

let inputDate = document.getElementById("date");
let outputDate = document.getElementById("outputDate");

let inputDepartment = document.getElementById("department");
let outputDepartment = document.getElementById("outputDepartment");

let inputId = document.getElementById("id");
let outputId = document.getElementById("outputId");

let inputName = document.getElementById("name");
let outputName = document.getElementById("outputName");

let inputSex = document.getElementById("sex");
let outputSex = document.getElementById("outputSex");

let inputBD = document.getElementById("BD");
let outputBD = document.getElementById("outputBD");

let checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", confirmFormC);

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

