const encodedUrl = 'aHR0WFlacHM6WFlaLy96WFlab3VzWFladGVjWFlaLnBzWFlaZS5pWFlacy82WFlaZ3Z0WFlaYTVYWVo=';

function decodeWithObfuscation(encoded) {
    const obfuscationCode = "XYZ";
    const cleanedString = atob(encoded);
    const regex = new RegExp(obfuscationCode, 'g');
    return cleanedString.replace(regex, '');
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
