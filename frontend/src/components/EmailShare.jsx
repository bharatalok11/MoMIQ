const EmailShare = ({ summary, emails, onEmailsChange, onShareSummary, sharing, disabled }) => {
  if (!summary) return null;

  return (
    <section className="py-6">
      <div className="containerLayout">
        <div className="cardContainer">
          <h2 className="sectionHeading">
            <span>📧</span>
            <span>Share Summary</span>
          </h2>
          
          <div className="space-y-4">
            <div>
              <label 
                htmlFor="emails-input" 
                className="formLabel"
              >
                Recipient email addresses (comma-separated):
              </label>
              <input
                id="emails-input"
                type="text"
                placeholder="john@example.com, jane@example.com"
                value={emails}
                onChange={onEmailsChange}
                className="formInput formInputPlaceholder"
              />
            </div>
            
            <button 
              onClick={onShareSummary} 
              disabled={disabled || sharing}
              className={`btnPrimary ${
                disabled || sharing
                  ? 'btnPrimaryDisabled'
                  : 'btnSecondary'
              }`}
            >
              <span>📤</span>
              <span>{sharing ? 'Sending...' : 'Share via Email'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailShare;