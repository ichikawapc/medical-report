// selectタグの文字色設定
function changeColor(hoge) {
    if (hoge.value == "null") {
        hoge.style.color = "#999999";
    } else {
        hoge.style.color = "#000000";
    }
}

// 計測不能ボタンの機能
function inabilityCCAR() {
    document.getElementById("CCA-result__R").value = "計測不能";
}

function inabilityBIFR() {
    document.getElementById("BIF-result__R").value = "計測不能";
}

function inabilityICAR() {
    document.getElementById("ICA-result__R").value = "計測不能";
}

function inabilityCCAL() {
    document.getElementById("CCA-result__L").value = "計測不能";
}

function inabilityBIFL() {
    document.getElementById("BIF-result__L").value = "計測不能";
}

function inabilityICAL() {
    document.getElementById("ICA-result__L").value = "計測不能";
}

// 報告書の出力機能
function outputReport() {
    // 患者情報の取得
    outputDate.innerText = inputDate.value;
    if (inputDepartment.value == "null") {
        outputDepartment.innerText = "";
    } else if (inputDepartment.value == "outpatient") {
        outputDepartment.innerText = "外来";
    } else {
        outputDepartment.innerText = inputDepartment.value;
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

    // 右頸動脈結果の取得
    if (inputCCAMethodR.value == "null") {
        outputCCAMethodR.innerText = "";
    } else {
        outputCCAMethodR.innerText = inputCCAMethodR.value;
    }
    outputCCAResultR.innerText = inputCCAResultR.value;
    if (inputCCAClassificationR.value == "null") {
        outputCCAClassificationR.innerText = "";
    } else {
        outputCCAClassificationR.innerText = inputCCAClassificationR.value;
    }
    if (inputBIFMethodR.value == "null") {
        outputBIFMethodR.innerText = "";
    } else {
        outputBIFMethodR.innerText = inputBIFMethodR.value;
    }
    outputBIFResultR.innerText = inputBIFResultR.value;
    if (inputBIFClassificationR.value == "null") {
        outputBIFClassificationR.innerText = "";
    } else {
        outputBIFClassificationR.innerText = inputBIFClassificationR.value;
    }
    if (inputICAMethodR.value == "null") {
        outputICAMethodR.innerText = "";
    } else {
        outputICAMethodR.innerText = inputICAMethodR.value;
    }
    outputICAResultR.innerText = inputICAResultR.value;
    if (inputICAClassificationR.value == "null") {
        outputICAClassificationR.innerText = "";
    } else {
        outputICAClassificationR.innerText = inputICAClassificationR.value;
    }

    // 左頸動脈結果の取得
    if (inputCCAMethodL.value == "null") {
        outputCCAMethodL.innerText = "";
    } else {
        outputCCAMethodL.innerText = inputCCAMethodL.value;
    }
    outputCCAResultL.innerText = inputCCAResultL.value;
    if (inputCCAClassificationL.value == "null") {
        outputCCAClassificationL.innerText = "";
    } else {
        outputCCAClassificationL.innerText = inputCCAClassificationL.value;
    }
    if (inputBIFMethodL.value == "null") {
        outputBIFMethodL.innerText = "";
    } else {
        outputBIFMethodL.innerText = inputBIFMethodL.value;
    }
    outputBIFResultL.innerText = inputBIFResultL.value;
    if (inputBIFClassificationL.value == "null") {
        outputBIFClassificationL.innerText = "";
    } else {
        outputBIFClassificationL.innerText = inputBIFClassificationL.value;
    }
    if (inputICAMethodL.value == "null") {
        outputICAMethodL.innerText = "";
    } else {
        outputICAMethodL.innerText = inputICAMethodL.value;
    }
    outputICAResultL.innerText = inputICAResultL.value;
    if (inputICAClassificationL.value == "null") {
        outputICAClassificationL.innerText = "";
    } else {
        outputICAClassificationL.innerText = inputICAClassificationL.value;
    }
}

// 患者情報の紐付け
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

// 右頸動脈結果の紐付け
let inputCCAMethodR = document.getElementById("CCA-method__R");
let outputCCAMethodR = document.getElementById("output-CCA-method__R");

let inputCCAResultR = document.getElementById("CCA-result__R");
let outputCCAResultR = document.getElementById("output-CCA-result__R");

let inputCCAClassificationR = document.getElementById("CCA-classification__R");
let outputCCAClassificationR = document.getElementById("output-CCA-classification__R");

let inputBIFMethodR = document.getElementById("BIF-method__R");
let outputBIFMethodR = document.getElementById("output-BIF-method__R");

let inputBIFResultR = document.getElementById("BIF-result__R");
let outputBIFResultR = document.getElementById("output-BIF-result__R");

let inputBIFClassificationR = document.getElementById("BIF-classification__R");
let outputBIFClassificationR = document.getElementById("output-BIF-classification__R");

let inputICAMethodR = document.getElementById("ICA-method__R");
let outputICAMethodR = document.getElementById("output-ICA-method__R");

let inputICAResultR = document.getElementById("ICA-result__R");
let outputICAResultR = document.getElementById("output-ICA-result__R");

let inputICAClassificationR = document.getElementById("ICA-classification__R");
let outputICAClassificationR = document.getElementById("output-ICA-classification__R");

// 左頸動脈結果の紐付け
let inputCCAMethodL = document.getElementById("CCA-method__L");
let outputCCAMethodL = document.getElementById("output-CCA-method__L");

let inputCCAResultL = document.getElementById("CCA-result__L");
let outputCCAResultL = document.getElementById("output-CCA-result__L");

let inputCCAClassificationL = document.getElementById("CCA-classification__L");
let outputCCAClassificationL = document.getElementById("output-CCA-classification__L");

let inputBIFMethodL = document.getElementById("BIF-method__L");
let outputBIFMethodL = document.getElementById("output-BIF-method__L");

let inputBIFResultL = document.getElementById("BIF-result__L");
let outputBIFResultL = document.getElementById("output-BIF-result__L");

let inputBIFClassificationL = document.getElementById("BIF-classification__L");
let outputBIFClassificationL = document.getElementById("output-BIF-classification__L");

let inputICAMethodL = document.getElementById("ICA-method__L");
let outputICAMethodL = document.getElementById("output-ICA-method__L");

let inputICAResultL = document.getElementById("ICA-result__L");
let outputICAResultL = document.getElementById("output-ICA-result__L");

let inputICAClassificationL = document.getElementById("ICA-classification__L");
let outputICAClassificationL = document.getElementById("output-ICA-classification__L");

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

