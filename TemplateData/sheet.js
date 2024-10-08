// 獲取當前 URL 的查詢參數
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const group = urlParams.get('group');

// 根據 'group' 的值設定重定向網址
let sheetUrl = "";
if (group === '0') {
    //兒童組績分
    sheetUrl = "https://script.google.com/macros/s/AKfycbypgPpW-ZYZWczF2yfYUzqW5UFVexZjSijN1Azdq8fO1c1OjgzPMqk6Jw-Ct7OftW-ffg/exec";
} else {
    //成人組績分
    sheetUrl = "https://script.google.com/macros/s/AKfycbyjSQnWJhwuWSRZYxd8jOtkOwF99ZNSUBp8bDGyNYlcIAD_II6hAoK7elOdQRWz6Y7dkw/exec";
}

const sheet = {
    Send: function() {
        gameInstance.SendMessage("Console", "ApplySetting", sheetUrl);
    }
};

//sheet.Send();
