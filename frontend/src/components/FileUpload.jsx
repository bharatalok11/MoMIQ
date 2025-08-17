const FileUpload = ({ transcript, onFileChange, onTextChange }) => {
  return (
    <section className="py-6">
      <div className="containerLayout">
        <div className="cardContainer">
          <h2 className="sectionHeading">
            <span>📄</span>
            <span>Upload Transcript</span>
          </h2>
          
          <div className="space-y-6">
            {/* File Upload Section */}
            <div>
              <input 
                type="file" 
                onChange={onFileChange}
                accept=".txt,.pdf,.doc,.docx"
                id="file-input"
                className="hidden"
              />
              <label 
                htmlFor="file-input" 
                className="fileUploadArea"
              >
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">
                    Choose a file or drag it here
                  </div>
                  <div className="text-xs text-gray-500">
                    Supports .txt, .pdf, .doc, .docx files
                  </div>
                </div>
              </label>
            </div>

            {/* Divider */}
            <div className="dividerContainer">
              <div className="dividerLine">
                <div className="dividerBorder"></div>
              </div>
              <div className="dividerText">
                <span className="dividerSpan">Or</span>
              </div>
            </div>

            {/* Text Input Section */}
            <div>
              <label 
                htmlFor="transcript-text" 
                className="formLabel"
              >
                Paste transcript text:
              </label>
              <textarea
                id="transcript-text"
                rows="6"
                placeholder="Paste your meeting transcript, call notes, or any text content here..."
                value={transcript}
                onChange={onTextChange}
                className="formInput formInputPlaceholder formTextarea"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileUpload;