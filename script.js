document.addEventListener("DOMContentLoaded", function () {
    const codeElement = document.getElementById("code");
    const copyButton = document.getElementById("copy-button");
    const saveButton = document.getElementById("save-button");
    const lockButton = document.getElementById("lock-button");

    copyButton.addEventListener("click", function () {
        const code = codeElement.innerText;
        navigator.clipboard.writeText(code).then(function () {
            alert("Code copied to clipboard!");
        });
    });

    saveButton.addEventListener("click", function () {
        const code = codeElement.innerText;
        // Implement code saving functionality here
        alert("Code saved!");
    });

    lockButton.addEventListener("click", function () {
        codeElement.contentEditable = !codeElement.isContentEditable;
        lockButton.innerText = codeElement.isContentEditable ? "Unlock" : "Lock";
    });
});
