const express = require('express');
const router = express.Router();
const { sendSummaryEmail } = require('../services/emailService');

router.post('/', async (req, res) => {
  const { summary, emails } = req.body;

  if (!summary || !emails || !Array.isArray(emails) || emails.length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Summary and a list of emails are required.',
      received: { summary: !!summary, emails: !!emails }
    });
  }

  try {
    await sendSummaryEmail(summary, emails);
    res.json({ 
      success: true, 
      message: 'Summary shared via email successfully' 
    });
  } catch (error) {
    console.error('Email sending error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to send summary email',
      details: error.message
    });
  }
});

module.exports = router;