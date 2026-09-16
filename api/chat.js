export default async function handler(req, res) {
  const apiKey = process.env.GROQ_API_KEY;
  const { message } = req.body;
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "llama-3.3-70b-versatile", messages: [{ role: "user", content: message }] })
  });
  const data = await response.json();
  res.status(200).json({ reply: data.choices[0].message.content });
}
