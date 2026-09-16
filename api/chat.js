export default async function handler(req,res){
  try{
    const {message} = req.body || {};
    if(!message) return res.status(200).json({reply:"Bolo bhai, kya help chahiye? Main Soyo Mind hu, 24x7 available!"});
    const k = process.env.GROQ_API_KEY;
    if(!k){
      return res.status(200).json({reply:`Aapne pucha: "${message}". Main Soyo Mind hu! Groq API Key add karte hi main pura AI ban jaunga. Abhi demo mode me hu.`});
    }
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+k},
      body:JSON.stringify({model:'llama-3.1-8b-instant',messages:[{role:'system',content:'You are SOYO Mind, friendly 24x7 AI, reply in Hindi/English mix.'},{role:'user',content:message}]})
    });
    const d = await r.json();
    return res.status(200).json({reply: d.choices?.[0]?.message?.content || "Thoda dobara bolo bhai!"});
  }catch(e){ return res.status(200).json({reply:"Hi! Main Soyo Mind hu, 24 hours available! Bolo kya madad karu?"}); }
}
