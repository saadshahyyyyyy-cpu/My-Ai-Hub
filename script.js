// AI Text Summarizer Button Action
const summarizerBtn = document.getElementById('summarizer-btn');
summarizerBtn.addEventListener('click', function() {
    const inputText = document.getElementById('summarizer-input').value;
    if(inputText.trim() === "") {
        alert("Pehle kuch text toh likhein!");
    } else {
        alert("Text mil gaya! AI summary jald generate hogi.");
    }
});

// Code Helper Button Action
const codeBtn = document.getElementById('code-btn');
codeBtn.addEventListener('click', function() {
    const codeQuery = document.getElementById('code-query').value;
    if(codeQuery.trim() === "") {
        alert("Apna query/code likhein!");
    } else {
        alert("Aapka query mil gaya: " + codeQuery);
    }
});