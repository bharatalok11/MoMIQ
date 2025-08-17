const MessageDisplay = ({ error, success }) => {
  if (!error && !success) return null;

  return (
    <div className="messageContainer">
      {error && (
        <div className="errorMessage">
          <div className="flex items-center">
            <span className="text-red-500 messageIcon">❌</span>
            <span className="errorText">{error}</span>
          </div>
        </div>
      )}
      {success && (
        <div className="successMessage">
          <div className="flex items-center">
            <span className="successIcon messageIcon">✅</span>
            <span className="successText">{success}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageDisplay;