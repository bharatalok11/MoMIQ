import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const generateSummary = async (transcript, prompt) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${API_BASE_URL}/generate-summary`, {
        transcript: transcript.trim(),
        prompt: prompt.trim(),
      });
      
      if (response.data.success) {
        setSuccess('Summary generated successfully!');
        return response.data.summary;
      } else {
        setError('Failed to generate summary. Please try again.');
        return null;
      }
    } catch (error) {
      console.error('Error generating summary:', error);
      const errorMessage = error.response?.data?.error || 'Error generating summary. Please check your connection and try again.';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const shareSummary = async (summary, emails) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${API_BASE_URL}/share-summary`, {
        summary: summary.trim(),
        emails: emails,
      });
      
      if (response.data.success) {
        setSuccess('Summary shared successfully via email!');
        return true;
      } else {
        setError('Failed to share summary. Please try again.');
        return false;
      }
    } catch (error) {
      console.error('Error sharing summary:', error);
      const errorMessage = error.response?.data?.error || 'Error sharing summary. Please check your email configuration and try again.';
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  const setFileError = (errorMessage) => {
    setError(errorMessage);
  };

  return {
    loading,
    error,
    success,
    generateSummary,
    shareSummary,
    clearMessages,
    setFileError,
  };
};