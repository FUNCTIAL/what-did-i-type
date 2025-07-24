// ----- Mappings -----
const THtoEN = {
    'ๅ': '1', '+': '!', '๑': '@', '/': '2', '-': '3', '๒': '#', 'ภ': '4', '๓': '$', 'ถ': '5', '๔': '%', 'ุ': '6', 'ู': '^', 'ึ': '7', '฿': '&',
    'ค': '8', '๕': '*', 'ต': '9', '๖': '(', 'จ': '0', '๗': ')', 'ข': '-', '๘': '_', 'ช': '=', '๙': '+', 'ๆ': 'q', '๐': 'Q', 'ไ': 'w', '"': 'W',
    'ำ': 'e', 'ฎ': 'E', 'พ': 'r', 'ฑ': 'R', 'ะ': 't', 'ธ': 'T', 'ั': 'y', 'ํ': 'Y', 'ี': 'u', '๊': 'U', 'ร': 'i', 'ณ': 'I', 'น': 'o', 'ฯ': 'O',
    'ย': 'p', 'ญ': 'P', 'บ': '[', 'ฐ': '{', 'ล': ']', 'ฃ': '\\', 'ฟ': 'a', 'ฤ': 'A', 'ห': 's', 'ฆ': 'S', 'ก': 'd', 'ฏ': 'D', 'ด': 'f', 'โ': 'F',
    'เ': 'g', 'ฌ': 'G', '้': 'h', '็': 'H', '่': 'j', '๋': 'J', 'า': 'k', 'ษ': 'K', 'ส': 'l', 'ศ': 'L', 'ว': ';', 'ซ': ':', 'ง': '’', 'ผ': 'z',
    '(': 'Z', 'ป': 'x', ')': 'X', 'แ': 'c', 'ฉ': 'C', 'อ': 'v', 'ฮ': 'V', 'ิ': 'b', 'ฺ': 'B', 'ื': 'n', '์': 'N', 'ม': ',', 'ฒ': '<', 'ใ': '.',
    'ฬ': '>', 'ฝ': '/', 'ฦ': '?', 'ท': 'm', 'ท': 'm'
};

// Invert mapping for English to Thai
const ENtoTH = {};
for (const [th, en] of Object.entries(THtoEN)) {
    ENtoTH[en] = th;
}
ENtoTH["'"] = 'ง';

// ----- Conversion Functions -----
function convertTHtoEN() {
    const thText = document.getElementById('Input').value;
    let result = '';
    for (let ch of thText) {
        result += THtoEN[ch] ? THtoEN[ch] : ch;
    }
    document.getElementById('Output').value = result;
}

function convertENToTH() {
    const enText = document.getElementById('Input').value;
    let result = '';
    for (let ch of enText) {
        result += ENtoTH[ch] ? ENtoTH[ch] : ch;
    }
    document.getElementById('Output').value = result;
}

// EN Priority
function swapBothWays() {
    const bothText = document.getElementById('Input').value;
    let result = '';
    for (let ch of bothText) {
        if (THtoEN[ch]) {
            result += THtoEN[ch];
        } else if (ENtoTH[ch]) {
            result += ENtoTH[ch];
        } else {
            result += ch;
        }
    }
    document.getElementById('Output').value = result;
}

// TH Priority
// function swapBothWays() {
//     const bothText = document.getElementById('Input').value;
//     let result = '';
//     for (let ch of bothText) {
//         if (ENtoTH[ch]) {
//             result += ENtoTH[ch];
//         } else if (THtoEN[ch]) {
//             result += THtoEN[ch];
//         } else {
//             result += ch;
//         }
//     }
//     document.getElementById('Output').value = result;
// }