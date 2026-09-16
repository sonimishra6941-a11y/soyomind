<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SOYO MIND</title>
<style>
body{background:#000;color:#fff;font-family:Arial;margin:0;display:flex;flex-direction:column;height:100vh}
#top{padding:15px;text-align:center;color:#00ff88;font-weight:bold;font-size:20px;border-bottom:1px solid #222}
#chat{flex:1;overflow-y:auto;padding:15px}
.msg{margin:10px 0;padding:12px 15px;border-radius:15px;max-width:85%;line-height:1.4}
.user{background:#222;margin-left:auto;border:1px solid #444}
.bot{background:#0a0a0a;border:1px solid #00ff88;box-shadow:0 0 8px #00ff8833}
#input-area{display:flex;padding:12px;background:#000;border-top:1px solid #222;gap:10px}
input{flex:1;padding:14px 18px;background:#111;color:#fff;border:1px solid #333;border-radius:25px;outline:none;font-size:16px}
button{background:#00ff88;color:#000;border:none;padding:14px 22px;border-radius:25px;font-weight:bold;font-size:16px}
button:active{transform:scale(0.95)}
</style>
</head>
<body>
<div id="top">SOYO MIND - 24x7 AI</div>
<div id="chat"></div>
<div id="input-area">
<input id="inp" type="text" placeholder="Kuch bhi pucho..." autocomplete="off"/>
<button id="sendBtn" onclick="send()">Send</button>
</div>
<script>
const chatDiv=document.getElementById('chat');
const inp=document.getElementById('inp');
const intro="Hello friends, I am introducing myself, I am SOYO MIND, twenty four hours in a day, seven days in a week, ask me any question, any doubt and anything!";
window.onload=()=>{
  addMsg(intro,'bot');
  let u=new SpeechSynthesisUtterance(intro); u.rate=0.9; speechSynthesis.speak(u);
  inp.focus();
};
function addMsg(t,c){let d=document.createElement('div');d.className='msg '+c;d.innerText=t;chatDiv.appendChild(d);chatDiv.scrollTop=chatDiv.scrollHeight}
async function send(){
  let msg=inp.value.trim(); if(!msg) return;
  addMsg(msg,'user'); inp.value='';
  addMsg("Soch raha hu...",'bot');
  try{
    let res=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:msg})});
    let data=await res.json();
    chatDiv.lastChild.remove();
    addMsg(data.reply,'bot');
    let ut=new SpeechSynthesisUtterance(data.reply); speechSynthesis.speak(ut);
  }catch(e){chatDiv.lastChild.remove(); addMsg("Network error bhai, fir se try karo.",'bot');}
}
inp.addEventListener('keydown',function(e){if(e.key==='Enter'){send()}});
</script>
</body>
</html>
