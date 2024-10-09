// 根據 'group' 的值設定重定向網址
let encodedUrl = 'aHR0WFlacHM6WFlaLy96WFlab3VzWFladGVjWFlaLnBzWFlaZS5pWFlacy82WFlaZ3Z0WFlaYTVYWVo=';
if (group === '0') {
    //兒童組表單
    encodedUrl = 'aHR0WFlacHM6WFlaLy96WFlab3VzWFladGVjWFlaLnBzWFlaZS5pWFlacy82WFlaZ3Z0WFlaYTVYWVo=';
} else {
    //成人組表單
    encodedUrl = 'aHR0WFlacHM6WFlaLy96WFlab3VzWFladGVjWFlaLnBzWFlaZS5pWFlacy82WFlaZ3Z0WFlaYTVYWVo=';
}

const frame = {
    loadIframe: function() {
        const originalUrl = decodeWithObfuscation(encodedUrl);
        document.getElementById('myIframe').src = originalUrl;
        document.getElementById('myIframeContainer').style.display = 'block';
        document.getElementById('myIframeContainer').classList.add('show');
    },
    closeIframe: function () {
        document.getElementById('myIframeContainer').classList.remove('show');
        document.getElementById('myIframeContainer').style.display = 'none';
        document.getElementById('myIframe').src = '';
    }
};

function decodeWithObfuscation(encoded) {
    const obfuscationCode = "XYZ";
    const cleanedString = atob(encoded);
    const regex = new RegExp(obfuscationCode, 'g');
    return cleanedString.replace(regex, '');
}