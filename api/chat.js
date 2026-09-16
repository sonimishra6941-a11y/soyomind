export default async function handler(req, res) {
  if (req.method!== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  const { message } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: message }],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (!data.choices ||!data.choices[0]) {
      return res.status(500).json({ error: 'AI se jawab nahi aaya', details: data });
    }

    return res.status(200).json({ reply: data.choices[0].message.content });

  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
