import { useState } from 'react';

import {Header, FileUpload, PromptInput, SummaryDisplay, EmailShare, ActionButtons, MessageDisplay, Footer } from './components';

import { useApi } from './hooks/useApi';

function App() {
    const [transcript, setTranscript] = useState('');
    const [prompt, setPrompt] = useState('');
    const [summary, setSummary] = useState('');
    const [emails, setEmails] = useState('');
    const [processingFile, setProcessingFile] = useState(false);

    const { loading, error, success, generateSummary, shareSummary, clearMessages, setFileError } = useApi();

    const getContent = async (file) => {
        try {
            const isText = file.type === 'text/plain' || file.name.toLowerCase().endsWith('.txt');

            if (isText) {
                // Handle text files
                console.log('Processing text file...');
                const fileContent = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const result = e.target.result;
                        if (!result || result.trim().length === 0) {
                            reject(new Error('Text file appears to be empty'));
                            return;
                        }
                        resolve(result);
                    };
                    reader.onerror = () => reject(new Error('Failed to read text file'));
                    reader.readAsText(file, 'UTF-8');
                });
                
                console.log('Text file read, length:', fileContent.length);
                return fileContent;
            } else {
                throw new Error('Unsupported file type. Only TXT files are supported. Please use a TXT file or paste text directly.');
            }
            
        } catch (error) {
            console.error('Error processing file:', error);
            throw error;
        }
    };

    const isValidFileType = (file) => {
        const isText = file.type === 'text/plain' || file.name.toLowerCase().endsWith('.txt');
        return isText;
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Debug information
        console.log('File details:', {
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified
        });

        // Validate file type first
        if (!isValidFileType(file)) {
            setFileError('Unsupported file type. Only TXT files are supported. Please use a TXT file or paste text directly.');
            return;
        }

        // Check file size (limit to 10MB)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            setFileError('File too large. Please use a file smaller than 10MB or paste the content directly.');
            return;
        }

        // Check if file is empty
        if (file.size === 0) {
            setFileError('File is empty. Please select a valid file.');
            return;
        }

        setProcessingFile(true);
        
        try {
            const fileContent = await getContent(file);
            setTranscript(fileContent);
            clearMessages();
        } catch (error) {
            console.error('File reading error:', error);
            setFileError(error.message);
        } finally {
            setProcessingFile(false);
        }
    };

    const handleTranscriptChange = (e) => {
        setTranscript(e.target.value);
        clearMessages();
    };

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
        clearMessages();
    };

    const handleSummaryChange = (e) => {
        setSummary(e.target.value);
    };

    const handleEmailsChange = (e) => {
        setEmails(e.target.value);
    };

    const handleGenerateSummary = async () => {
        if (!transcript.trim() || !prompt.trim()) {
            return;
        }

        const generatedSummary = await generateSummary(transcript, prompt);
        if (generatedSummary) {
            setSummary(generatedSummary);
        }
    };

    const handleShareSummary = async () => {
        if (summary.trim() === "" || emails.trim() === "") {
            return;
        }

        const emailList = emails.split(',').map(email => email.trim()).filter(email => email);
        if (emailList.length === 0) {
            return;
        }

        const success = await shareSummary(summary, emailList);
        if (success) {
            setEmails('');
        }
    };

    const handleClearAll = () => {
        setTranscript('');
        setPrompt('');
        setSummary('');
        setEmails('');
        clearMessages();
    };

    const isGenerateDisabled = loading || !transcript.trim() || !prompt.trim();
    const isShareDisabled = loading || !summary.trim() || !emails.trim();

    return (
        <div className="App">
            <Header />

            <main className="App-main">
                <FileUpload 
                    transcript={transcript}
                    onFileChange={handleFileChange}
                    onTextChange={handleTranscriptChange}
                    processing={processingFile}
                />

                <PromptInput 
                    prompt={prompt}
                    onPromptChange={handlePromptChange}
                    onGenerateSummary={handleGenerateSummary}
                    loading={loading}
                    disabled={isGenerateDisabled}
                />

                <SummaryDisplay 
                    summary={summary}
                    onSummaryChange={handleSummaryChange}
                />

                <EmailShare 
                    summary={summary}
                    emails={emails}
                    onEmailsChange={handleEmailsChange}
                    onShareSummary={handleShareSummary}
                    sharing={loading}
                    disabled={isShareDisabled}
                />

                <ActionButtons onClearAll={handleClearAll} />

                <MessageDisplay error={error} success={success} />
            </main>

            <Footer />
        </div>
    );
}

export default App;