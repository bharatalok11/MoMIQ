const Groq = require('groq-sdk');
const { buildPrompt } = require('../utils/promptBuilder');

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';

const hasGroq = Boolean(GROQ_API_KEY);

const makeGroqClient = () => {
  if (!hasGroq) return null;
  return new Groq({ apiKey: GROQ_API_KEY });
};

async function generateSummary(transcript, prompt) {
  if (!hasGroq) {
    throw new Error('No AI provider configured. Please set GROQ_API_KEY in your environment variables.');
  }

  try {
    const client = makeGroqClient();
    const model = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

    const chat = await client.chat.completions.create({
      model,
      messages: [{ role: 'user', content: buildPrompt(transcript, prompt) }],
      temperature: 0.7,
      max_tokens: 2048,
    });

    return chat.choices?.[0]?.message?.content?.trim() || '';
  } catch (err) {
    console.error('Groq error:', err.message);
    
    // Provide more specific error messages
    if (err.message.includes('401')) {
      throw new Error('Invalid API key. Please check your GROQ_API_KEY.');
    } else if (err.message.includes('403')) {
      throw new Error('Access denied. Please check your API key permissions.');
    } else if (err.message.includes('429')) {
      throw new Error('Rate limit exceeded. Please try again in a few moments.');
    } else if (err.message.includes('model_decommissioned') || err.message.includes('model')) {
      throw new Error('Model not found or decommissioned. Please check the GROQ_MODEL environment variable or use a supported model.');
    }
    
    throw new Error('Error generating summary. Please check your API key and try again.');
  }
}

module.exports = { generateSummary };