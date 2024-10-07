const sheetUrl = "https://script.google.com/macros/s/AKfycbyjSQnWJhwuWSRZYxd8jOtkOwF99ZNSUBp8bDGyNYlcIAD_II6hAoK7elOdQRWz6Y7dkw/exec";

const sheet = {
    Send: function() {
        gameInstance.SendMessage("Console", "ApplySetting", sheetUrl);
    }
};

//sheet.Send();
