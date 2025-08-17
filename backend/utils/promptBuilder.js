function buildPrompt(transcript, instruction) {
    return `You are an expert meeting summarizer. Create a clear, well-structured summary based on the provided instruction.

INSTRUCTION:
${instruction}

TRANSCRIPT:
${transcript}

REQUIREMENTS:
- Follow the instruction strictly and precisely
- Use clear, professional formatting
- Structure the summary logically with appropriate sections
- Only include information that is actually present in the transcript
- If a section has no relevant information, omit it entirely rather than writing "None"
- Use bullet points for action items and lists
- Make the summary concise but comprehensive
- Highlight key decisions, action items, and next steps clearly
- Use professional business language
- Ensure all dates, times, names, and details are accurate

FORMAT GUIDELINES:
- Use clear section headers (e.g., "Summary:", "Action Items:", "Decisions:", "Next Steps:")
- Use bullet points (•) for lists
- Keep paragraphs concise
- Use bold text for important information when appropriate
- Maintain consistent formatting throughout
`;
  }

module.exports = { buildPrompt };