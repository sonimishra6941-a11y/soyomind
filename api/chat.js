export default async function handler(req,res){
const k=process.env.GROQ_API_KEY;
const {message}=req.body||{};
try{
const r=await fetch('https://api.groq.com/openai/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+k},body:JSON.stringify({model:'llama-3.1-8b-instant',messages:[{role:'user',content:message}]})});
const d=await r.json();
return res.status(200).json({reply:d.choices[0].message.content});
}catch(e){return res.status(500).json({error:e.message});}
}
