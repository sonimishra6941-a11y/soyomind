<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SOYO Mind</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#f6f5fb;padding:15px;font-family:sans-serif}
.card{background:white;border-radius:16px;padding:16px;margin-top:12px}
.header{display:flex;justify-content:space-between;align-items:center}
.logo{font-weight:800;font-size:22px}
.tag{font-size:12px;background:#efeaff;padding:4px 8px;border-radius:20px}
.prerna{background:linear-gradient(135deg,#a78bfa,#f0abfc);color:white}
.btn{width:100%;padding:15px;border-radius:12px;border:none;font-weight:700;margin-top:10px}
.btn-primary{background:#111;color:white}
.btn-pro{background:#fdcb6e;color:#111}
.small{font-size:13px;color:#777;margin-top:8px}
.chatbox{margin-top:10px}
.chatbox textarea{width:100%;padding:12px;border-radius:12px;border:1px solid #ddd}
.msg{background:#f1f0ff;padding:10px;border-radius:12px;margin-top:10px;white-space:pre-wrap}
</style>
</head>
<body>
<div class="header"><div class="logo">SOYO Mind</div><div class="tag">PRO Active</div></div>
<div class="card prerna"><h3>Aaj Ki Prerna</h3><p id="prernaText">Himmat mat haro, tum best ho!</p></div>
<div class="card"><h3>Talk to SOYO Mind</h3><div class="chatbox"><textarea id="userInput" placeholder="Kuch bhi pucho jaise 4+9 = ?"></textarea><button class="btn btn-primary" onclick="talk()">Bhejo</button><div id="chatReply" class="msg">Namaste! Main SOYO hu. Pucho kuch bhi!</div></div></div>
<div class="card"><h3>Daily Momentum</h3><p class="small">Roz thoda progress karo.</p><button class="btn btn-primary" onclick="alert('Aaj ka task complete!')">Aaj ka Task</button></div>
<div class="card" id="proCard"><h3>SOYO Mind PRO - ₹100</h3><p class="small">Full motivation + focus tools</p><button class="btn btn-pro">PRO Lo</button></div>
<script>
function talk(){
  let q = document.getElementById('userInput').value.trim();
  if(!q) return;
  let ans = "";
  // Maths check
  if(/^[0-9+\-*/().% ]+$/.test(q)){
    try{
      let result = Function('"use strict";return ('+q+')')();
      ans = q+" = "+result+" hota hai! 🔥 Wah, aise hi practice karte raho!";
    }catch(e){ ans = "Ye hisab thoda gadbad lag raha hai, fir se likho!"; }
  } else if(q.toLowerCase().includes("tension") || q.toLowerCase().includes("dar")){
    ans = "Samajh rahi hu. '"+q+"' me dar lagna normal hai. Ek lambi saans lo, 5 min bas ek chhota kaam karo, himmat wapas aa jayegi!";
  } else {
    ans = "Bohot achha sawal! '"+q+"' ke liye yaad rakho - roz 5 min focus se bada result banta hai. Tum kar loge!";
  }
  document.getElementById('chatReply').innerText = "SOYO: "+ans;
  document.getElementById('userInput').value="";
}
</script>
</body>
</html>
