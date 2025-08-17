const express = require('express');
const router = express.Router();
const { generateSummary } = require('../services/aiService');

router.post('/', async (req, res) => {
  const { transcript, prompt } = req.body;

  if (!transcript || !prompt) {
    return res.status(400).json({
      success: false,
      error: 'Transcript and prompt are required.',
      received: { transcript: !!transcript, prompt: !!prompt }
    });
  }

  try {
    const summary = await generateSummary(transcript, prompt);
    res.json({
      success: true,
      summary,
      message: 'Summary generated successfully'
    });
  } catch (error) {
    console.error('Summary generation error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Error generating summary',
      details: error.message
    });
  }
});

module.exports = router;