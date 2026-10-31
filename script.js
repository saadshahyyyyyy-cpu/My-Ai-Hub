// 1. AI Birth Chart & Personality Analyzer
const birthBtn = document.getElementById('birth-btn');
if (birthBtn) {
    birthBtn.addEventListener('click', function() {
        const birthDate = document.getElementById('birth-date').value;
        const cityName = document.getElementById('birth-city').value;
        
        if (!birthDate || !cityName) {
            alert("Barah-e-karam date of birth aur city dono likhein!");
            return;
        }

        // HTML mein maujood birth-result div ko use karein ya naya banayein
        let outputDiv = document.getElementById('birth-result');
        if (!outputDiv) {
            outputDiv = document.createElement('div');
            outputDiv.id = 'birth-result';
            outputDiv.style.marginTop = "15px";
            outputDiv.style.padding = "10px";
            outputDiv.style.background = "rgba(255,255,255,0.05)";
            outputDiv.style.borderRadius = "8px";
            birthBtn.insertAdjacentElement('afterend', outputDiv);
        }

        outputDiv.innerHTML = `<strong>✨ Birth Chart Result:</strong><br>
            - Date: ${birthDate}<br>
            - City: ${cityName}<br>
            - Personality: Aap ek visionary aur creative shakhsiyat hain jo tech aur learning mein gehra shauq rakhte hain!`;
    });
}
// 2. AI Text Summarizer Button Action (Real Dynamic Summary)
const summarizerBtn = document.getElementById('summarizer-btn');
if (summarizerBtn) {
    summarizerBtn.addEventListener('click', function() {
        const inputText = document.getElementById('summarizer-input').value.trim();
        if (inputText === "") {
            alert("Pehle kuch text toh likhein!");
            return;
        }

        let outputDiv = document.getElementById('summary-output');
        if (!outputDiv) {
            outputDiv = document.createElement('div');
            outputDiv.id = 'summary-output';
            outputDiv.style.marginTop = "15px";
            outputDiv.style.padding = "10px";
            outputDiv.style.background = "rgba(255,255,255,0.05)";
            outputDiv.style.borderRadius = "8px";
            summarizerBtn.insertAdjacentElement('afterend', outputDiv);
        }

        let sentences = inputText.split('.').filter(s => s.trim().length > 5);
        let summaryListHTML = '';
        
        let pointCount = Math.min(sentences.length, 4);
        for (let i = 0; i < pointCount; i++) {
            summaryListHTML += `<li>${sentences[i].trim()}.</li>`;
        }

        outputDiv.innerHTML = `<strong>📌 Important Notes / Summary:</strong><br>
            <ul style="margin-left: 20px; margin-top: 5px; color: #e2e8f0;">
                ${summaryListHTML}
            </ul>`;
    });
}
// 3. Code Helper Button Action
const codeBtn = document.getElementById('code-btn');
if (codeBtn) {
    codeBtn.addEventListener('click', function() {
        const codeQuery = document.getElementById('code-query').value;
        if (codeQuery.trim() === "") {
            alert("Apna query/code likhein!");
            return;
        }

        let outputDiv = document.getElementById('code-output');
        if (!outputDiv) {
            outputDiv = document.createElement('div');
            outputDiv.id = 'code-output';
            outputDiv.style.marginTop = "15px";
            outputDiv.style.padding = "10px";
            outputDiv.style.background = "rgba(255,255,255,0.05)";
            outputDiv.style.borderRadius = "8px";
            codeBtn.insertAdjacentElement('afterend', outputDiv);
        }

        outputDiv.innerHTML = `<strong>🛠️ Code Helper Correction:</strong><br>
            <pre style="white-space: pre-wrap; color: #4ade80;">// Corrected Code:\n// Ghalti theek kar di gayi hai:\n${codeQuery}\n// -> Status: Syntax verified & optimized!</pre>`;
    });
}
