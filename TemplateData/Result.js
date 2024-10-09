function ResultUnity(actionName) {
    switch (actionName) {
        case "QuestLink":
            frame.loadIframe();
            break;
        default:
            console.log("unknown mission: " + actionName);
            break;
    }
}