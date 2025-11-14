
// ------------------------------ CORE ENGINE EXTENSIONS ---------------------------------

// Utilities
const rand = (a,b)=>Math.random()*(b-a)+a;
const chatOut = document.getElementById('chat-output');
const input = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

// --- Simple append bubble function (preserves old behaviour) ---
function appendBubble(text,isAI=false){
    const b = document.createElement('div');
    b.className = 'bubble ' + (isAI? 'ai' : 'user');
    b.innerText = text;
    b.style.margin = '6px 0';
    chatOut.appendChild(b);
    chatOut.scrollTop = chatOut.scrollHeight;
}

// -----------------------------------------------------------------
// 1) FULL Live2D Integration (loader + runtime hooks)
// -----------------------------------------------------------------
// This implementation provides an integration point. To enable real Live2D:
// 1. Upload your Live2D model files (model.json or model3.json + textures) to a publicly accessible path.
// 2. Include Live2D Web SDK in the page e.g. <script src="https://unpkg.com/@live2djs/core">