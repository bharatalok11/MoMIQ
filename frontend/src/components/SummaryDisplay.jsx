const SummaryDisplay = ({ summary, onSummaryChange }) => {
  if (!summary) return null;

  return (
    <section className="py-6">
      <div className="containerLayout">
        <div className="cardContainer">
          <h2 className="sectionHeading">
            <span>Generated Summary</span>
          </h2>
          
          <div>
            <label 
              htmlFor="summary-text" 
              className="formLabel"
            >
              Edit the summary if needed:
            </label>
            <textarea
              id="summary-text"
              rows="12"
              value={summary}
              onChange={onSummaryChange}
              placeholder="Generated summary will appear here..."
              className="formInput formInputPlaceholder formTextarea font-mono text-sm leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryDisplay;