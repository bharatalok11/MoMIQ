const PromptInput = ({ prompt, onPromptChange, onGenerateSummary, loading, disabled }) => {
  return (
    <section className="py-6">
      <div className="containerLayout">
        <div className="cardContainer">
          <h2 className="sectionHeading">
            <span>Custom Instructions</span>
          </h2>
          
          <div className="space-y-4">
            <div>
              <label 
                htmlFor="prompt-input" 
                className="formLabel"
              >
                Enter your custom prompt/instruction:
              </label>
              <textarea
                id="prompt-input"
                rows="3"
                placeholder="e.g., 'Summarize in bullet points for executives' or 'Highlight only action items'"
                value={prompt}
                onChange={onPromptChange}
                className="formInput formInputPlaceholder formTextarea"
              />
            </div>
            
            <button 
              onClick={onGenerateSummary} 
              disabled={disabled || loading}
              className={`btnPrimary ${
                disabled || loading
                  ? 'btnPrimaryDisabled'
                  : 'btnPrimaryEnabled'
              }`}
            >
              <span>{loading ? 'Generating...' : 'Generate Summary'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptInput;